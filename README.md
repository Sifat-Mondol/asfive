1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
getElementById → finds one element by its unique ID.

getElementsByClassName → finds all elements with the same class (gives a live list).

querySelector → finds the first element that matches a CSS selector.

querySelectorAll → finds all elements that match a CSS selector (gives a static list).

2.How do you create and insert a new element into the DOM?

 first make a new element (like a box, paragraph, or button).

Then we can add text or details inside that element.

Finally, we place it into the page by attaching it to another element.

3.What is Event Bubbling and how does it work?

Event Bubbling means when you click on a child element, the event first happens on that element, then moves up step by step to its parent, grandparent, and so on until the top of the page.

4.What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means putting one event listener on a parent to handle events for all its child elements.
 It is useful because it makes code faster, simpler, and uses less memory, especially when many child elements exist.

 5.What is the difference between preventDefault() and stopPropagation() methods?

 preventDefault() → stops the browser’s default action (like link opening or form submitting).

stopPropagation() → stops the event from moving up to parent elements.
