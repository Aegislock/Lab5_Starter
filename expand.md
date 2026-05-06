1) IDs & Classes
They link HTML, CSS, and JS, so good naming keeps code maintainable and avoids conflicts. Poor choices make styling and scripting brittle.

2) Data attributes
data-* stores custom info on elements and is accessed via element.dataset. Useful for lightweight data, but not ideal for semantic/microdata purposes.

3) DOM fragment
A DocumentFragment lets you build DOM off-screen before inserting it. This improves performance by reducing reflows.

4) Virtual DOM
It’s a JS copy of the DOM used to batch efficient updates. You gain performance and simplicity but lose direct control and add overhead.

5) class vs className
class is reserved in JS, so the DOM uses className. This avoids syntax conflicts.

6) addEventListener vs onClick
addEventListener supports multiple handlers and more control. onClick is simpler but limited to one handler.