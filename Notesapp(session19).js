console.log("Welcome to notes app. This is app.js");
showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="edith">${element.title}</h5>
                        <p class="card-text" id="editp"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)"class="btn btn-primary">Delete Note</button>
                        <button class="btn btn-primary" id="addBtn" onclick="editNote(this.id)" style="user-select: auto;">Edit Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

//Delete when  someone clicks delete the node
function deleteNote(index) {
  // console.log("I am deleting note number", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//function to search a keyword inside a note
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  //input even fires when something is types

  let inputVal = search.value.toLowerCase(); //for having even case sensitive search matches
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    let cardTitle = element
      .getElementsByTagName("h5")[0]
      .innerText.toLowerCase();
    if (cardTxt.includes(inputVal) || cardTitle.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
function editNote(index) {
  document.getElementById("edith").contentEditable = "true";
  document.getElementById("editp").contentEditable = "true";
  // let cardTxt = document.getElementById("edith").innerText.toLowerCase();
  //   let cardTitle = document.getElementById("editp").innerText.toLowerCase();

}
document.getElementById("clearallBtn").addEventListener("click", function (e) {
  localStorage.clear();
  document.location.reload();
});
