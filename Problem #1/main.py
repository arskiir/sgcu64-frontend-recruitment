CHAR_MAP = {
    "0": [" __ ", "|  |", "|__|"],
    "1": ["    ", "   |", "   |"],
    "2": [" __ ", " __|", "|__ "],
    "3": [" __ ", " __|", " __|"],
    "4": ["    ", "|__|", "   |"],
    "5": [" __ ", "|__ ", " __|"],
    "6": [" ___", "|__ ", "|__|"],
    "7": [" __ ", "   |", "   |"],
    "8": [" __ ", "|__|", "|__|"],
    "9": [" __ ", "|__|", " __|"],
    ":": ["    ", "  · ", "  · "],
    "b": ["    ", "    ", " __ "],
}


def print_result(formatted_time: str):
    for line in range(3):
        for each in formatted_time:
            print(CHAR_MAP[each][line], end="")
        print()


def is_valid_range(number: int or str):
    return 0 <= int(number) <= 59


def is_valid_time_format(number_str: str):
    _, minute, second = number_str.split(":")
    return is_valid_range(minute) and is_valid_range(second)


formatted_time = input("Input: ")
if is_valid_time_format(formatted_time):
    print_result(formatted_time)
else:
    print_result("bb:bb:bb")
