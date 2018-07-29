# Specification Overview

This page should provide a brief summary of the syntax of the language for you.

## Functions

Forge defines functions in the same way as Elixir does. For example, here is a function that takes two numbers and adds them.

```elixir
# add/2
def Add(a, b) do
  a + b
end
```

*Note the automatic return of the result of the last statement evaluated. This is again the same as in Elixir.*

## Modules

Forge defines modules instead of the typical Class you might see in C++. Remember, Forge is a Functional language, so Modules act differently than classes as well.

```elixir
defmodule Adder do
  def Add(a, b) do
    a + b
  end
end
```

## Variable Types

Forge has the same types as Elixir, which also mirrors many other languages.

### Integers

Integers are for storing non-floating point numbers.

```elixir
x = 10
```

### Floats

Floats are for storing floating point numbers.

```elixir
x = 10.0
```

### Booleans

Forge uses true and false for boolean values.
