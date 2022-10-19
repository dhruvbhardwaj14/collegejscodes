console.log('Tutorial 21 exercise 2 JavaScript');
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
// Creating the header and injecting it into body
const body = document.body;

// Creating div and injecting into body
const div = document.createElement("div");
div.innerText = "This is an editable div";
div.id = "edit";
body.append(div);

// Whenever user Clicks on the div
document.getElementById("edit").addEventListener("click", () => {
    div.contentEditable = "true"; // It will make the content inside the div editable
});

// Whenever user Clicks away from the div, save the content inside local storage
 