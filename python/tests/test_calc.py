import calc


def test_add():
    assert calc.add(2, 3)


def test_mean(numbers):
    assert calc.mean(numbers) == 2.5
