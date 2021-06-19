def setup_local_database(port: int = 4000):
    ...


def start_site(port: int = 3000):
    ...


def start_about_site(port: int = 3001):
    ...


def start_api(port: int = 5000):
    ...


def start_functions(port: int = 7071):
    ...


if __name__ == "__main__":
    setup_local_database()
    start_site()
    start_about_site()
    start_api()
    start_functions()