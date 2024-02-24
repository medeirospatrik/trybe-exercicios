# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

nome = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def maior_nome(names: list):
    """Recebe uma lista de nomes e retorna o maior nome."""
    big_name = ''
    for name in names:
        if len(name) > len(big_name):
            big_name = name
    
    print(big_name)

maior_nome(nome)

