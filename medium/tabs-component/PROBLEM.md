🟡 MEDIUM #4 — Tabs Component
📌 Problem Statement (Machine-coding style)

Create a React application that displays a Tabs UI.
Clicking on a tab should show its related content while hiding the others.

🎯 Exact Requirements (VERY IMPORTANT)

Create 3 tabs:

Home

Profile

Settings

Only one tab can be active at a time

When a tab is clicked:

Its content should be shown

Other tab contents should be hidden

The active tab should have different styling

(e.g. bold text / underline / background)

Use React state to track the active tab

No routing (react-router)

No CSS-only hacks (must be state-driven)

🧠 What this problem tests

State-driven UI

Conditional rendering

Handling click events

Avoiding unnecessary states

This is a very common product-based company question.

🖥️ Expected UI (simple)
[ Home ] [ Profile ] [ Settings ]

(Home selected)
Welcome to Home page

(Profile selected)
This is Profile page

(Settings selected)
Settings go here

⏱️ Time Limit

25–30 minutes

Take your time, don’t rush.

🚫 What NOT to do

❌ No multiple boolean states (isHome, isProfile…)

❌ No map required (optional later)

❌ No routing

❌ No useEffect

💡 Hint (conceptual, not code)

You only need ONE state:

const [activeTab, setActiveTab] = useState("home");


Then:

Buttons update activeTab

Content renders based on activeTab