🟡 Medium #2: Todo App – Mark as Complete

This is your 2nd Medium machine-coding problem.
It is an extension of the Todo App (Add & Delete) you already built.

📌 Problem Statement (Interview-style)
Todo App – Mark as Complete

Extend your existing Todo application to allow users to mark a todo as completed.

✅ Exact Functionality You Must Build
1️⃣ Todo structure (important change)

Each todo should now have:

text → todo title

completed → boolean

Example:

{
  text: "Learn React",
  completed: false
}

2️⃣ UI behavior

For each todo item:

Show todo text

Show a Complete button

When user clicks Complete:

That todo’s completed becomes true

Todo text should show:

line-through

OR faded/gray style

3️⃣ Rules (important)

❌ Do NOT remove delete functionality

❌ Do NOT add edit functionality

❌ Do NOT use localStorage

❌ Do NOT add checkboxes

Just:
✔ Add
✔ Delete
✔ Complete

🧠 What this problem tests (very important)

Array of objects (not strings)

Updating a specific item in an array

Immutable state updates

Conditional styling

This is core React interview knowledge.