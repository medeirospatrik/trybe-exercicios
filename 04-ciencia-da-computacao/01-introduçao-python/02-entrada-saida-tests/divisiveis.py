def identificando_divisiveis(n):
    new_list = []
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            new_list.append('FizzBuzz')
        elif number % 3 == 0:
            new_list.append('Fizz')
        elif number % 5 == 0:
            new_list.append('Buzz')
        else:
            new_list.append(number)
    
    return new_list

print(identificando_divisiveis(15))

def sum(n1, n2):
    return n1 + n2