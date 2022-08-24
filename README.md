# Intro to testing

## Basic concepts

### Types of testing

Testing pyramid:

- Unit
- Integration tests
- E2E
- Manual testing

We're going to focus on Unit testing - testing indivudual functions (or components in React).

### Terminology

- TDD (test driven development)
- System under test (SUT)
- Test runner (e.g. `pytest` or `jest`)
- Red green refactor

### Why write tests?

- improve confidence that code is correct
- catch regressions (e.g refactors that break some functionality)
- act as documentation for yourself/other devs

### Why TDD?

- hard to retrospectively add tests
- encourages incremental coding/running (good way to reduce bugs)
- encourages you to write more modular code (easier to maintain)

### Hello `pytest`

#### Test 1

```python
def say_hello(first_name):
  pass
```

This should demonstrate:

- running the test runner
- running a failing test
- implementing the minimal code to pass the test

#### Test 2

```python
def say_hello(first_name, last_name=None):
  pass
```

This should demonstrate:

- introducing a regression

#### Test 3

```python
def say_hello(first_name, last_name=None, salutation=None):
  pass
```

This should demonstrate:

- refactoring with passing test suite

### Testing a react app

#### Testing `calculateWinner`

```js
describe("calculateWinner", () => {
  it("returns the winner when there is a winning line", () => {
    // TODO...
  });

  it("returns null when there isn't a winning line", () => {
    // TODO...
  });

  // ...
});
```

This should demonstrate:

- factoring out plain js code from a react component
- same testing concepts apply

Potential extensions:

- rewrite code to make it more testable (i.e. make winning lines an argument)

#### Testing React components

```js
describe("Square", () => {
  it("renders the value", () => {
    // TODO...
  });
});
```

This should demonstrate:

- rendering to `js-dom`
- asserting the rendered output

```js
describe("Square", () => {
  it("renders the value", () => {
    // TODO...
  });

  it("calls the onClick", () => {
    // TODO...
  });
});
```

This should demonstrate:

- mocking functions
- reducing noise in tests
