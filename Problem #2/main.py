from Place import Place


def main():
    place_names = ["a", 'b', 'c', 'd', 'e', 'f']
    places = [Place(name) for name in place_names]
    options = create_options()


def check_in():
    pass


def checkout():
    pass


def print_people_count():
    pass


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
