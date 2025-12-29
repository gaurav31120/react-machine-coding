🟡 MEDIUM #9 — Pagination (Basic)
📌 Problem Description

Create a React application that shows a paginated list.

🎯 Functional Requirements

You have a list of 10 items
(Example: Item 1, Item 2, … Item 10)

Show ONLY 3 items per page

UI must have:

A list of items

Previous button

Next button

🔁 Behavior

Initially:

Show items 1–3

Previous button is disabled

Clicking Next:

Page 2 → items 4–6

Page 3 → items 7–9

Page 4 → item 10

Clicking Previous:

Goes back to previous page

Disable:

Previous button on first page

Next button on last page

🧠 Constraints (IMPORTANT)

Use one state for current page

Do NOT:

Store sliced list in state

Use multiple states for pages

Use slice() for pagination logic

💡 Conceptual Hint (no code)

Think in terms of:

currentPage

itemsPerPage

startIndex = currentPage * itemsPerPage

endIndex = startIndex + itemsPerPage