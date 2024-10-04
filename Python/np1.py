#Variáveis

a = 912
b = "LIMEirA"
print(a)
print(b)
numero = 123.456789
formatado = f"{numero:.2f}"
print(formatado)
d = True
e = False
print(d,e)
print(f"Digitar o Skambal {a} muito legal")
f = "879"
print(type(f))
f = int(f)
print(type(f))
#receber uma variável inteira e decimal
g = int(input("Digite um valor inteiro: "))
j = float(input("Digite um número decimal quebradão: "))
print(g, j, a, b)

#Strings

t = "Pedaço de Bolo"
print(t)
print(t.upper())
print(t.lower())
print(t.isupper())
print(t.islower())
print(t.title())
print(t.replace("Bolo", "pIZzA"))
print(t.split())
print(t.split("o"))
print(len(t))

#Fatiamento de Strings

m = "ParaLelepíPedo"
print(m[2])
print(m[3:7])
print(m[2:])
print(m[:5])
print(m[-2:])
print(m[:-3])
print(m[2:-3])
print(m[-6:-2])

#Operações

"""
Divisão inteira: //
Resto da divisão: %
Exponenciação: **
Raiz quadrada: **(1/2)
Raiz qualquer: **(1/h)
"""

h = 3
r = 5
print(h + r)
print(h - r)
print(r - h)
print(h * r)
print(h / r)
print(r / h)
print(h // r)
print(r // h)
print(h % r)
print(r % h)
print(h ** r)
print(r ** h)
print(r ** (1/2))
print(h ** (1/2))
print(r ** (1/h))
print(h ** (1/r))
# verificar a igualdade e desigualdade de números
f = 6
print( 'F é igual a 5? ', f==5 )
print( 'F é diferente de 5? ', f!=5 )
print('F é maior que 5? ', f > 5)
print('F é menor que 5? ', f < 5)
print('F é maior ou igual a 5? ', f >= 5)
print('F é menor ou igual a 5? ', f <= 5)


#Listas

# criando uma lista
lista = [3, 0, 7, 5, 2, 8]
print(lista)

# adicionar valor na lista
lista.append(777)
print(lista)

# adicionar palavra na lista
lista.append("sinciciotrofoblasto")
print(lista)

# criando nova lista
lista2 = ['Batman', 13]
lista3 = lista + lista2
print(lista3)

# adicionando elemento no inicio da lista
lista3 = ["THOR"] + lista3
print(lista3)

# adicionando elemento na terceira posicao
lista3 = lista3[0:3] + ['camelo'] + lista3[3:]
print(lista3)

# Lista Loka - mistura
misturado ={
   'j': 87147,
   'k': 'megabytes',
   'm': [1,9,8,7,"massa"]
}

# criando uma lista com STR
lista = ["Denis","Bruno","Garcia","Marcao"]
#           0         1     2        3   da esquerda para a direita
#          -4        -3    -2       -1   da direita para a esquerda
print(lista)
print(lista[3])
print(lista[-3])
print(lista[2:])
print(lista[1:3])
lista.append("SEU NOME")
print(lista)

lista[3]= "Ribeiro"
print(lista)
lista.extend(["Silvio","Pelé"])
print(lista)
lista.insert(2,"Mágico")
print(lista)
lista.pop()
print(lista)
lista.pop()
print(lista)
lista.remove("Garcia")
print(lista)
print(lista.index("Ribeiro"))
print(lista.count("Ribeiro"))
print(lista.count("Marcao"))
lista.sort()
print(lista)

lista.clear()
print(lista)


#Ordenar, Tuplas, SETS

# criando outra  listaN
listaN = [34,36,13,6,5,11]
print(listaN)

# adicionar valor na lista
listaN.append(33)
print(listaN)
listaN.sort()
print(listaN)
listaN.reverse()
print(listaN)

#TUPLAS () não é possível ser alterada, exemplo, não aceita o pop, remove.
#TUPLA é uma lista Imutável, quase não usamos
#uso bem restrito, algo estático, algo para não correr o risco de ser adulterado, alterado
coordenadas= (-2,4,5)
print(coordenadas)
print(coordenadas[0])
print(coordenadas[1])
print(coordenadas[2])
print(coordenadas.count(4))


# adicionar valor na lista
listaN.append('arroz')
print(listaN)

# criando nova lista
lista2 = ['peixe','frango','porco']
lista3 = listaN + lista2
print(lista3)

# SET coleções,conjuntos,é desordenado(não tem índice), consegue adicionar, remover, não trocar
# SET usa chaves e Lista usa colchetes, ele não aceita valores duplicados
frutas = {"banana","laranja","abacaxi","banana",55,"melão", 48, 55, 55, 55,"banana"}
print(frutas)


#Dicionario
dicionario = {'arroz': 18.5, 'feijão': 8.7, 'macarrao': 3.5}

# imprimindo o dicionário inteiro
print(dicionario)

# imprimindo apenas a chave fulano de tal
print(dicionario["macarrao"])

# imprimir o nome das chaves
print( dicionario.keys() )

# imprimir o valor das chaves
print(dicionario.values())

# inserindo outra chave
dicionario['biscoito'] = 3.9

print(dicionario)
print(dicionario.get("feijão"))
print(len(dicionario))

idades= {
    "Marcao" : 55,
    "Revonildo" : 34,
    "Bleida" : 23
    }
print(idades)


#Estrutura de decisão

num = input("Digite um número: ")

# converter para float
num = float(num)

if num<5:
  print('Número pequeno')

elif num>=5 and num<10:
  print('Número médio pequeno')

elif num>=10 and num<20:
  print('Número médio grande')

else:
  print('Número grande')

#Range

# criando sequencia de numeros de 1 em 1
listaDeNumeros = list( range(10) )
print( listaDeNumeros )

# criando sequencia de numeros de 2 em 2
listaDeNumeros = list( range(0,10,2) )
print( listaDeNumeros )

# criando sequencia de numeros de 3 em 3
listaDeNumeros = list( range(0,10,3) )
print( listaDeNumeros )

# criando sequencia de numeros de 10 ate 0 pulando de 3 em 3
listaDeNumeros = list( range(10,-1,-3) )
print( listaDeNumeros )

# criando sequencia de numeros de 10 ate 0 pulando de 1 em 1
listaDeNumeros = list( range(10,-1,-1) )
print( listaDeNumeros )


#Laços de Repetição For

# imprimir os números de 0 a 10
print('Números de 0 a 10')

for i in range(10):
  print(i)


# imprimir os números de 2 até 20, pulando de 2 em 2
print('números de 2 até 20, pulando de 2 em 2')

for i in range(2,20,2):
  print(i)


# imprimindo uma lista de compras
print('Itens de compra:')

for i in ['arroz', 'macarrao', 'carne']:
  print(i)

print(". . . . . . .")
# imprimindo uma lista de compras
lista = ['peixe', 'frango', 'porco']
print('Carnes: ')

for i in lista:
  print(i)

#While

# imprimir os numeros de 2 até 20, pulando de 2 em 2

i = 2
while i<29:
  print(i)

  i+=2


#Função

def soma(num1,num2):
  """
  Calcula a soma de dois números
  """

  total = num1+num2

  return total

# testando a função soma
total = soma(10,20)
print(total)