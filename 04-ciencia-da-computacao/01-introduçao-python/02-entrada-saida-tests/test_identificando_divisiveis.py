from divisiveis import identificando_divisiveis
 
def test_identifyinf_divisibles_by_three_is_fizz():
    assert identificando_divisiveis(3) == [1, 2, 'Fizz']

def test_identifyinf_divisibles_by_five_is_buzz():
    assert identificando_divisiveis(5) == [1, 2, 'Fizz', 4, 'Buzz']

def test_identifyinf_divisibles_by_five_and_three_is_fizzbuzz():
    assert identificando_divisiveis(15) == [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']



