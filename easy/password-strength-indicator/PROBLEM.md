🟢 EASY #12 — Password Strength Indicator
📌 Problem Statement (Machine-coding style)

Create a React application with a password input field.
As the user types the password, show a password strength message based on the length of the password.

🎯 Exact Requirements

Display an input field

type="password"

As the user types, evaluate password strength:

Weak → password length less than 6

Medium → password length between 6 and 9

Strong → password length 10 or more

Show the strength text below the input

Initially:

Input is empty

No strength text is shown

Use React state

Strength should update in real time

🧠 What this problem tests

Controlled input

Derived UI from state

Conditional rendering

Basic logical conditions

This question is very common in frontend interviews.

🖥️ Expected UI (example)
[ ******** ]

Weak

[ ************ ]

Strong

⏱️ Time Limit

15–20 minutes

🚫 What NOT to do

❌ No extra buttons

❌ No regex

❌ No CSS-only solution

❌ No useEffect (not needed)