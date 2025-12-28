🟡 MEDIUM #5 — Search Filter List
📌 Problem Statement (Machine-coding style)

Create a React application that allows the user to search and filter a list of items in real time.

🎯 Exact Requirements (read carefully)

Display an input box

Display a list of items:

Apple

Banana

Mango

Orange

As the user types in the input:

Filter the list in real time

Show only items that include the typed text

Search should be case-insensitive

If input is empty:

Show all items

Use React state

Do NOT use useEffect

Do NOT mutate the original list

🧠 What this problem tests (important)

Controlled input

array.filter

Case-insensitive search

Derived UI (filtered list from state)

This is a very common product-based interview question.

🖥️ Expected UI (example)
Search: an

Banana
Mango
Orange


Typing ap should show:

Apple

⏱️ Time Limit

20–25 minutes

Take it slow. This one is about clear thinking, not speed.

🚫 What NOT to do

❌ No multiple states for list

❌ No modifying original array

❌ No debounce / throttle

❌ No regex

💡 Conceptual Hint (no code yet)

You need:

One state for search text

One constant array for items

Use .filter() while rendering