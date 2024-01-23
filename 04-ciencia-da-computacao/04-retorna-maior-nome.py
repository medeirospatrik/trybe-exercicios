peoples = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def returns_greatest_name(list):
    xablau = ''
    for name in peoples:
        if len(name) > len(xablau):
            xablau = name

    return xablau

print(returns_greatest_name(peoples))