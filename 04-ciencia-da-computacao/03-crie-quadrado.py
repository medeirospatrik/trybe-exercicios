def print_square(n):
    if n > 1:
        counter = 0

        while counter < n:
            linha = '* ' * n
            print(linha)
            counter += 1

    else:
        print('Passe um numero acima de 1')

print_square(10)