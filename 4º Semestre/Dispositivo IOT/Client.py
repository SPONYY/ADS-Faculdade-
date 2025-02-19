import socket
import random
import time
import datetime

def dispositivo(dispositivo_id="Dispositivo_1"):
    host = '127.0.0.1'
    port = 65432

    while True:
        temperatura = round(random.uniform(15.0, 35.0), 2)
        numero_aleatorio = random.randint(0, 100)
        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        mensagem = f"{dispositivo_id},{temperatura},{numero_aleatorio},{timestamp}"

        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.connect((host, port))
                s.sendall(mensagem.encode('utf-8'))
                data = s.recv(1024)
            print(f"Enviado: {mensagem} | Resposta: {data.decode('utf-8')}")
        
        except Exception as e:
            print(f"Erro de conexão: {e}")

        time.sleep(10)

# Execute o cliente com um identificador único
dispositivo("Dispositivo_1")
# Para um segundo dispositivo, execute este código em outro terminal, mudando o ID:
# dispositivo("Dispositivo_2")
