#Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def higher_number(num1: int, num2: int) -> int:
    """Função recebe dois inteiros, e retorna o maior deles."""
    return max([num1, num2])

    
print(higher_number(8, 5))