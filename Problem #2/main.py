from typing import Dict, List
from Place import Place


def main():
    place_names = ["Mahamakut Building", 'Sara Phra Keaw',
                   'CU Sport Complex', 'Sanam Juub', 'Samyan Mitr Twon', 'CU Dorm']
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


def check_in(places: List[Place]):
    def print_places():
        for place in places:
            print(f"\t{place.self_id}. {place.name}")

    def get_selected_place(id: int):
        for place in places:
            if place.self_id == id:
                return place

    def remove_from_all_places(number: str):
        for place in places:
            if place.exists(number):
                place.checkout(number)

    number = input("Enter a phone number: ")
    print_places()
    selected_place_id = int(input("Select the place: "))
    selected_place = get_selected_place(selected_place_id)

    if selected_place.exists(number):
        print(f"{number} has already checked in to this place.")
        return

    remove_from_all_places(number)

    print(f"Checking in {number} into {selected_place.name}")
    selected_place.check_in(number)


def checkout(places: List[Place]):
    number = input("Enter phone number: ")
    for place in places:
        if place.exists(number):
            place.checkout(number)
            print(number + " has checked out from " + place.name)
            return

    print("This number, " + number + " has not checked in in any places.")


def print_people_count(places: List[Place]):
    print("Current Population")
    for i, place in enumerate(places, 1):
        print(f"{i}. {place.name}: {place.count_checked_in}")


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
