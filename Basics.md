======================================================== If Condition ===========================================================================

1. Here's a complete example of how you might handle the name variable and respond based on whether the input is empty or not:

name = input("Enter your name: ")
if name:
    print(f"Hello, {name}!")
else:
    print("You didn't enter a name.")

- input("Enter your name: ") prompts the user to type their name.
- The if name: condition checks if the name variable contains any value. If it does, it proceeds with the print statement in the if block.
- If the name is empty (user presses Enter without typing anything), it falls into the else block.

2. The condition if name != '' checks if the input is not an empty string. It's equivalent to checking whether the user provided any input. Here's an updated example using that condition:

name = input("Enter your name: ")
if name != '':
    print(f"Hello, {name}!")
else:
    print("You didn't enter a name.")

3. if-elif-else Statement

marks = 85
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 50:
    print("Grade: C")
else:
    print("Grade: F")

4. Nested if Statements

age = 20
citizen = True

if age >= 18:
    if citizen:
        print("You are eligible to vote.")
    else:
        print("You must be a citizen to vote.")
else:
    print("You are not old enough to vote.")


In Python, if and if-else statements are used for conditional execution. They allow you to run specific blocks of code depending on whether a condition is True or False.

1. Basic if Statement
The if statement executes a block of code if its condition evaluates to True.

python
Copy code
age = 20
if age >= 18:
    print("You are eligible to vote.")
If the condition (age >= 18) is True, the code inside the if block runs.
If the condition is False, nothing happens.
2. if-else Statement
The if-else statement provides an alternative block of code to run if the condition is False.

python
Copy code
age = 16
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote yet.")
When age < 18, the else block executes.
3. if-elif-else Statement
The if-elif-else structure is used when you need to check multiple conditions.

python
Copy code
marks = 85
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 50:
    print("Grade: C")
else:
    print("Grade: F")
The elif keyword allows you to check additional conditions after the first if.
The else block runs if none of the if or elif conditions are True.
4. Nested if Statements
You can nest if statements to check conditions within conditions.

python
Copy code
age = 20
citizen = True

if age >= 18:
    if citizen:
        print("You are eligible to vote.")
    else:
        print("You must be a citizen to vote.")
else:
    print("You are not old enough to vote.")
Each if is checked only if the preceding condition is True.

5. Ternary if (Conditional Expressions)
Python supports a shorthand version of if-else called a ternary operator.

age = 20
eligibility = "Eligible to vote" if age >= 18 else "Not eligible to vote"
print(eligibility)

6. if with Logical Operators

age = 25
citizen = True

if age >= 18 and citizen:
    print("You can vote.")
else:
    print("You cannot vote.")

7. Common Mistakes

Using = instead of ==:

# Incorrect
if x = 10:  # This will cause a syntax error.
Use == for comparison, not =.

Indentation Errors:

if x > 10:
print("x is greater than 10")  # This will raise an IndentationError.
Ensure proper indentation (4 spaces or a tab).

8. Truthiness

value = ""
if value:
    print("Value is not empty.")
else:
    print("Value is empty.")

======================================================== While Loop ===========================================================================

The while loop in Python is used to repeatedly execute a block of code as long as a given condition is True. Here's a detailed explanation with examples.

while condition:
    # Code block to execute

1. Example: Simple Loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1  # Increment the counter
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4

2. Infinite Loops

A while loop can become infinite if the condition never becomes False. Use caution!

while True:
    print("This is an infinite loop!")

To exit an infinite loop, you typically use:

A break statement to stop the loop.
A condition within the loop to control execution.

4. Using break to Exit a Loop - The break statement immediately stops the loop.

count = 0
while True:
    print(f"Count: {count}")
    count += 1
    if count == 5:
        break  # Exit the loop when count reaches 5

Count: 0
Count: 1
Count: 2
Count: 3
Count: 4

5. Using continue to Skip Iterations - The continue statement skips the rest of the code in the current iteration and moves to the next iteration.

count = 0
while count < 5:
    count += 1
    if count == 3:
        continue  # Skip the rest of the loop for count == 3
    print(f"Count: {count}")

Count: 1
Count: 2
Count: 4
Count: 5

6. while with else - The else block runs after the while loop finishes, unless the loop is exited with break.

count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1
else:
    print("Loop finished!")

Count: 0
Count: 1
Count: 2
Loop finished!

If the loop is interrupted by a break, the else block is skipped:

count = 0
while count < 3:
    print(f"Count: {count}")
    if count == 1:
        break
    count += 1
else:
    print("Loop finished!")

Count: 0
Count: 1

7. Nested while Loops

You can use a while loop inside another loop.

i = 1
while i <= 3:
    j = 1
    while j <= 2:
        print(f"i: {i}, j: {j}")
        j += 1
    i += 1

i: 1, j: 1
i: 1, j: 2
i: 2, j: 1
i: 2, j: 2
i: 3, j: 1
i: 3, j: 2

8. Common Mistakes
Forgetting to update the condition:

count = 0
while count < 5:
    print(count)  # Infinite loop because count is not incremented

Misplacing break or continue: Ensure break and continue are placed where they make sense logically.

Relying on unintentional infinite loops: Always verify your loop condition to prevent endless execution.

9. Practical Example: User Input

while True:
    name = input("Enter your name (or type 'exit' to quit): ")
    if name.lower() == 'exit':
        print("Goodbye!")
        break
    print(f"Hello, {name}!")

======================================================== For Loop ===========================================================================
The for loop in Python is used to iterate over a sequence (like a list, tuple, dictionary, set, or string) or any other iterable object. It executes a block of code for each item in the sequence.

for variable in iterable:
    # Code block

variable: Temporary variable that takes the value of the current item in the iterable.
iterable: A sequence (e.g., list, string) or any object that can return one item at a time.

1. Iterating over a list:

fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)
# Output:
# apple
# banana
# cherry

2. Iterating over a string:

for letter in "Python":
    print(letter)
# Output:
# P
# y
# t
# h
# o
# n

3. Using range():

for i in range(5):
    print(i)
# Output:
# 0
# 1
# 2
# 3
# 4

4. With enumerate():

for index, value in enumerate(['a', 'b', 'c']):
    print(index, value)
# Output:
# 0 a
# 1 b
# 2 c

5. Iterating over a dictionary:

person = {'name': 'Alice', 'age': 25}
for key, value in person.items():
    print(key, value)
# Output:
# name Alice
# age 25

6. Nested for Loops:

matrix = [[1, 2], [3, 4]]
for row in matrix:
    for value in row:
        print(value)
# Output:
# 1
# 2
# 3
# 4

7. else with for: The else block executes if the loop completes normally without encountering a break.

for i in range(3):
    print(i)
else:
    print("Loop finished")
# Output:
# 0
# 1
# 2
# Loop finished

8. Using break and continue:
break: Exit the loop prematurely.
continue: Skip the rest of the current iteration and move to the next one.

for i in range(5):
    if i == 3:
        break
    print(i)
# Output:
# 0
# 1
# 2

for i in range(5):
    if i == 3:
        continue
    print(i)
# Output:
# 0
# 1
# 2
# 4

Common Use Cases
- Processing data in lists, tuples, or sets.
- Iterating over characters in a string.
- Generating sequences with range().
- Iterating over dictionary keys and values.
- Nested loops for multidimensional data structures (e.g., matrices).

Tips
- Use list comprehensions for concise loops that build new lists.

squares = [x**2 for x in range(5)]
print(squares)
# Output: [0, 1, 4, 9, 16]

- Use zip() for parallel iteration of multiple iterables.
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
for num, char in zip(list1, list2):
    print(num, char)
# Output:
# 1 a
# 2 b
# 3 c
