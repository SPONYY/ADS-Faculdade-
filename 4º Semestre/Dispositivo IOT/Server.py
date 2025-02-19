import socket
import datetime
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

dados_armazenados = []

def calcular_estatisticas():
    if dados_armazenados:
        temperaturas = [dado['temperatura'] for dado in dados_armazenados]
        numeros_aleatorios = [dado['numero_aleatorio'] for dado in dados_armazenados]
        
        menor_temp = min(temperaturas)
        maior_temp = max(temperaturas)
        media_temp = sum(temperaturas) / len(temperaturas)
        desvio_temp = np.std(temperaturas)

        menor_num = min(numeros_aleatorios)
        maior_num = max(numeros_aleatorios)
        media_num = sum(numeros_aleatorios) / len(numeros_aleatorios)
        desvio_num = np.std(numeros_aleatorios)

        resposta = f"\nÚltima Temp: {temperaturas[-1]}, Menor Temp: {menor_temp}, Maior Temp: {maior_temp}, Média Temp: {media_temp:.2f}, Desvio Temp: {desvio_temp:.2f}\n"
        resposta += f"Último Nº: {numeros_aleatorios[-1]}, Menor Nº: {menor_num}, Maior Nº: {maior_num}, Média Nº: {media_num:.2f}, Desvio Nº: {desvio_num:.2f}"

        if len(temperaturas) > 1:
            correlacao = np.corrcoef(temperaturas, numeros_aleatorios)[0, 1]
            resposta += f"\nCorrelação Temp e Nº: {correlacao:.2f}"
        
        return resposta
    else:
        return "Nenhuma informação recebida ainda."

def exibir_dashboard():
    plt.clf()
    temperaturas = [dado['temperatura'] for dado in dados_armazenados]
    timestamps = [dado['timestamp'] for dado in dados_armazenados]

    if len(temperaturas) > 1:
        plt.plot(timestamps, temperaturas, label='Temperatura')
        plt.axhline(np.mean(temperaturas), color='r', linestyle='--', label='Média')
        plt.fill_between(timestamps, np.mean(temperaturas) - np.std(temperaturas), np.mean(temperaturas) + np.std(temperaturas), color='yellow', alpha=0.3, label='Desvio Padrão')
        plt.xticks(rotation=45)
        plt.legend()
        plt.tight_layout()
        plt.pause(0.05)

def servidor():
    host = '127.0.0.1'
    port = 65432

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((host, port))
        s.listen()
        print("Servidor aguardando conexões...")

        while True:
            conn, addr = s.accept()
            with conn:
                print(f"Conectado por {addr}")
                
                while True:
                    data = conn.recv(1024)
                    if not data:
                        break
                    
                    mensagem = data.decode('utf-8')
                    print(f"Recebido: {mensagem}")
                    
                    dispositivo_id, temperatura, numero_aleatorio, timestamp = mensagem.split(',')
                    temperatura = float(temperatura)
                    numero_aleatorio = int(numero_aleatorio)

                    dados_armazenados.append({
                        'dispositivo_id': dispositivo_id,
                        'temperatura': temperatura,
                        'numero_aleatorio': numero_aleatorio,
                        'timestamp': timestamp
                    })

                    resposta = calcular_estatisticas()
                    conn.sendall(resposta.encode('utf-8'))
                    
                    exibir_dashboard()


plt.ion()
plt.figure()
plt.title("Dashboard de Temperatura com Thresholds Adaptativos")
plt.xlabel("Tempo")
plt.ylabel("Temperatura")

servidor()
