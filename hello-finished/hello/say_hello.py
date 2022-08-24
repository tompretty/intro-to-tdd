def say_hello(first_name, last_name=None, salutation="Hello"):
    full_name = f"{first_name} {last_name}" if last_name else first_name

    return f"{salutation}, {full_name}"
