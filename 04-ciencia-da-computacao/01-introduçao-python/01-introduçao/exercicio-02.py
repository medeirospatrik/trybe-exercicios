# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def sum_average (numbers: list) -> int:
    """Calcula a media aritimética dos valores contido em uma lista"""
    average = 0
    for n in numbers:
        average += n
        
    return average / len(numbers)

print(sum_average([10, 5]))