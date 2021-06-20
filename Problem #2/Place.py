class Place:
    def __init__(self, name):
        self.name = name
        self.checked_in_numbers = []
        self.count_checked_in = 0

    def __str__(self: str) -> str:
        return self.name

    def __repr__(self) -> str:
        return self.__name__
