import random

lista_de_palavras = []

with open('palavras.txt') as file:
        lista_de_palavras = [palavra.strip() for palavra in file]


palavra_sorteada = random.choice(lista_de_palavras)
embaralhada = ''.join(random.sample(palavra_sorteada, len(palavra_sorteada)))

counter = 1

while palavra_sorteada:
    tentativa = input(f'Qual é a palavra {embaralhada} ? ')
    if tentativa == palavra_sorteada:
        print(f"Parabéns! Você acertou! A palavra era {palavra_sorteada.upper()}")
        break  # Encerra o loop
    elif counter == 3:
        print(f'Você perdeu, a palavra éra {palavra_sorteada.upper()}')
        break
    else:
        print("Tente novamente. Palavra errada.")
        counter += 1