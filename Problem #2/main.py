from Place import Place


def main():
    place_names = ["a", 'b', 'c', 'd', 'e', 'f']
    places = [Place(name) for name in place_names]


if __name__ == '__main__':
    main()
