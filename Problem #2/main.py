from typing import Dict
from Place import Place


def main():
    place_names = ["a", 'b', 'c', 'd', 'e', 'f']
    places = [Place(name) for name in place_names]
    options = create_options()

    while True:
        print("Welcome to Chula Chana!!!")
        print_options(options)
        selected = input("Please input any number: ")
        print_hr()

        selected_option = options[selected]
        print(selected_option['name'])
        selected_option['action'](places)
        print_hr()


def check_in():
    pass


def checkout():
    pass


def print_people_count():
    pass


def print_hr():
    print("------------------------------------------------------\n")


def print_options(options: Dict):
    print("Available commands:")
    for key, value in options.items():
        print(f"\t{key}. {value['name']}")


def create_options():
    return {
        "1": {
            "name": "Check in user", "action": check_in,
        },
        "2": {
            "name": "Check out user", "action": checkout,
        },
        "3": {
            "name": "Print people count", "action": print_people_count,
        },
    }


if __name__ == '__main__':
    main()
