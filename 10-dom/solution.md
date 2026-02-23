

dom into java script  give simple and easy for bennigner best practice me 20  problem qusestion with answer

Feb 12
DOM JavaScript - 20 Beginner Practice Problems with Solutions
1. Change Text Content
Problem: Change the text of an element with id "demo" to "Hello World"

javascript
document.getElementById("demo").textContent = "Hello World";
2. Change HTML Content
Problem: Change inner HTML of an element to include a bold tag

javascript
document.getElementById("demo").innerHTML = "<b>Bold Text</b>";
3. Change Background Color
Problem: Change background color of body to lightblue

javascript
document.body.style.backgroundColor = "lightblue";
4. Hide an Element
Problem: Hide an element with id "myDiv"

javascript
document.getElementById("myDiv").style.display = "none";
5. Show an Element
Problem: Show a hidden element

javascript
document.getElementById("myDiv").style.display = "block";
6. Get Element by Class Name
Problem: Change text of first element with class "myClass"

javascript
document.getElementsByClassName("myClass")[0].textContent = "New Text";
7. Get Element by Tag Name
Problem: Change color of all paragraphs to red

javascript
let paragraphs = document.getElementsByTagName("p");
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}
8. Query Selector
Problem: Select first button and change its text

javascript
document.querySelector("button").textContent = "Click Me";
9. Query Selector All
Problem: Change color of all div elements to blue

javascript
document.querySelectorAll("div").forEach(div => {
    div.style.color = "blue";
});
10. Add Event Listener - Click
Problem: Show alert when button is clicked

javascript
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clicked!");
});
11. Create New Element
Problem: Create a new paragraph and add it to body

javascript
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph";
document.body.appendChild(newPara);
12. Remove an Element
Problem: Remove an element with id "remove-me"

javascript
let element = document.getElementById("remove-me");
element.remove();
13. Add a Class
Problem: Add class "highlight" to an element

javascript
document.getElementById("myDiv").classList.add("highlight");
14. Remove a Class
Problem: Remove class "active" from an element

javascript
document.getElementById("myDiv").classList.remove("active");
15. Toggle a Class
Problem: Toggle class "show" on click

javascript
document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("myDiv").classList.toggle("show");
});
16. Get Input Value
Problem: Get value from input field and display in alert

javascript
let inputValue = document.getElementById("myInput").value;
alert(inputValue);
17. Set Attribute
Problem: Change image source attribute

javascript
document.getElementById("myImg").setAttribute("src", "newimage.jpg");
18. Get Attribute
Problem: Get the href attribute of a link

javascript
let link = document.getElementById("myLink").getAttribute("href");
console.log(link);
19. Change Multiple Styles
Problem: Change font size, color, and weight together

javascript
let element = document.getElementById("myText");
element.style.fontSize = "20px";
element.style.color = "green";
element.style.fontWeight = "bold";
20. Create and Insert Element Before Another
Problem: Create a new heading and insert before existing paragraph

javascript
let newHeading = document.createElement("h2");
newHeading.textContent = "New Heading";
let para = document.getElementById("myPara");
para.parentNode.insertBefore(newHeading, para);
Best Practices:
Always check if element exists before manipulating it
Use textContent for text-only content (safer than innerHTML)
Use querySelector for modern code (more flexible)
Cache DOM selections in variables if using multiple times
Use addEventListener instead of onclick attributes
Use classList methods instead of manipulating className directly





Claude is AI and can make mistakes. Please double-check responses.
