// alert("Hello and welcome to the world of coding");

const headingText = document.getElementById("heading-text");

headingText.innerHTML = "This is a heading changed by innerHTML";
headingText.style.color = "blue";
headingText.style.fontSize = "40px";

const paragraphText = document.getElementById("paragraph-text");
paragraphText.innerHTML = "This is a paragraph changed by innerHTML";
paragraphText.style.color = "red";
paragraphText.style.fontSize = "20px";

const buttonText = document.getElementById("button-text");
buttonText.innerHTML = "Click Me to learn DOM!";
buttonText.style.backgroundColor = "green";
buttonText.style.color = "white";
buttonText.style.fontSize = "15px";
buttonText.style.borderRadius = "10px";
buttonText.style.cursor = "pointer";
buttonText.style.boxShadow = "5px 5px 5px goldenrod";

buttonText.addEventListener("click", function () {
    headingText.innerHTML = "This is a heading rechanged";
    headingText.style.color = "black";
    paragraphText.innerHTML = "This is a paragraph changed by innerHTML again";
    paragraphText.style.color = "blue";

    // or you can use an if else statement
    // if (buttonText.innerHTML === "Click Me to learn DOM!") {
    //     buttonText.innerHTML = "Click Me to learn DOM again!";
    // } else {
    //     buttonText.innerHTML = "Click Me to learn DOM!";
    // }
});

const inputText = document.getElementById("input-text");
const testHeading = document.getElementById("test");

// this is an event listener that listens to the input event on the input field and changes the text of the heading as the user types in the input field
inputText.addEventListener("input", function () {
    if (inputText.value.length > 10) {
        inputText.value = inputText.value.slice(0, 10);
    }
    testHeading.textContent = inputText.value;
    // testHeading.innerHTML = "You typed right!";



});