# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

nome = input('Digite seu nome: ')

for i in range(len(nome), 0, -1):
    novo_nome = nome[:i]
    print(novo_nome)