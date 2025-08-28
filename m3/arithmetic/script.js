// Ashlyn May Arithmetic Calculator
// 08/28/25 1:21PM
// OOP Javascript

const body = document.body;

// Create title and name
const title = document.createElement("h1");
title.id = "title";
title.textContent = "Ashlyn May's Arithmetic Calculator";
body.appendChild(title);

// Create Description for assignment
const desc = document.createElement("p");
desc.id = "desc";
desc.textContent = "All of the element creation is done in JS, not in HTML. You can type in your equation using your keyboard or the on-screen keypad.";
body.appendChild(desc);

// Create function to make buttons
function createButton(text, id, className, appendTo) {
    const newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.id = id;
    newButton.className = className;
    newButton.addEventListener("click", () => {
        buttonPress(newButton.textContent);
    })
appendTo.appendChild(newButton);
}

// Function for buttons to add to input box and calculate
function buttonPress(buttonValue) {
    if (display.value == "" && buttonValue == "=") {
        alert("Please type in an equation using your keyboard or the on-screen numpad.");
    } else if (buttonValue !== "=") {
        display.value = display.value + buttonValue;
    } else {
        // Check values allowed in input using regexp, found info on google. Also check for 0 division
        const allowedValues = /^[1234567890+\-*/=]+$/;
        if (display.value.endsWith("/0")) {
            alert("You cannot divide by 0.")
        } else if (allowedValues.test(display.value)) {
            // Found eval function on google 
            display.value = eval(display.value);
            console.log(eval(display.value));
        } else {
            alert("Only use the characters provided on the screen.");
        } 
    }
}

// Create input box
const display = document.createElement("input");
display.id = "display";
body.appendChild(display);
// Check for enter and parse it as an equals sign
display.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        buttonPress("="); 
    }
});

// Create divs as rows for the number buttons
for (let row = 0; row < 3; row++) {
    let newRow = document.createElement("div");
    newRow.id = `row${row}`;
    newRow.className = "row";
    body.appendChild(newRow);
    // Create buttons for each number inside each row
    for (let button = 0; button < 3; button++) {
        let newButton = document.createElement("button");
        // Depending on which row, set i as 
        // offset so button numbers are correct
        let i;
        if (row === 1) {
            i = 3;
        } else if (row === 2) {
            i = 6;
        } else {
            i = 0;
        }
        createButton(i+button+1, `button${newButton.textContent + 1}`, "num", newRow);
    }
}

// Select rows to add modifier buttons to
const topRow = document.getElementById("row0");
const secondRow = document.getElementById("row1");
const thirdRow = document.getElementById("row2");

// Create Row for final modifer / clear button
const lastRow = document.createElement("div");
lastRow.className = "row";
lastRow.id = "row3";

// Add clear button to final row
const clearBut = document.createElement("button");
clearBut.textContent = "C";
clearBut.id = "clearBut";
lastRow.appendChild(clearBut);
body.appendChild(lastRow);
clearBut.addEventListener("click", () => {
    value = "";
    display.value = value;
})

// Add modifier buttons and 0
createButton("/", "div", "modifiers", topRow);
createButton("*", "mult", "modifiers", secondRow);
createButton("-", "sub", "modifiers", thirdRow);
createButton("0", "button0", "num", lastRow);
createButton("=", "equals", "equals", lastRow);
createButton("+", "add", "modifiers", lastRow);


