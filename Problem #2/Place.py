class Place:
    def __init__(self, name):
        self.name = name
        self.checked_in_numbers = []
        self.count_checked_in = 0

    def check_in(self, number: str):
        self.checked_in_numbers.append(number)
        self.count_checked_in += 1

    def checkout(self, number: str):
        self.checked_in_numbers.remove(number)
        self.count_checked_in -= 1

    def __str__(self: str) -> str:
        return self.name

    def __repr__(self) -> str:
        return self.__name__
