from .say_hello import say_hello


def test_say_hello_says_hello():
    # set up
    first_name = "Tom"

    # act
    message = say_hello(first_name)

    # assert
    assert message == "Hello, Tom"


def test_say_hello_uses_the_full_name_if_provided():
    # set up
    first_name = "Tom"
    last_name = "Pretty"

    # act
    message = say_hello(first_name, last_name=last_name)

    # assert
    assert message == "Hello, Tom Pretty"


def test_say_hello_uses_the_salutation_if_provided():
    # set up
    first_name = "Tom"
    salutation = "Hey"

    # act
    message = say_hello(first_name, salutation=salutation)

    # assert
    assert message == "Hey, Tom"
