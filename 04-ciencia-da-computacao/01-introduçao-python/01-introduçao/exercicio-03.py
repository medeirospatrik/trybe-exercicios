# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

def generate_square(number: int):
    count = 0
    if number <= 1:
        print('Escolha um acima de  1 para formar um quadrado')
    else:
        while count < number:
            print(number * '*')
            count += 1

generate_square(1)

