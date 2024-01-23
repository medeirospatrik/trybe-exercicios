grades = [8, 6, 9, 6]
print(len(grades))

def average(list):
    sum = 0
    for grade in grades:
        sum += grade

    return sum / len(list)

print(average(grades))