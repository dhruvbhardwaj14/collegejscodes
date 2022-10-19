console.log('This is ES6 version of Project 2');
dis();
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
function Delete(index) {
    console.log("I am deleting note number", index);
    let books = localStorage.getItem("Books");
    let booksObj;
    if (books == null) {
      booksObj = [];
    } else {
      booksObj = JSON.parse(books);
    }
    booksObj.splice(index, 1);
    localStorage.setItem("Books", JSON.stringify(booksObj));
  }
function  dis(){
    let books=localStorage.getItem("Books");
    let booksObj=[];
    if (books == null) {
        booksObj = [];
      } else { 
        booksObj = JSON.parse(books);
      }
    let tableBody = document.getElementById('tableBody');
    booksObj.forEach(function(element, index) {
        let uiString = `<tr>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                       <td><button id="${index}" onclick="Display.delete(this.id) type="button" class="btn btn-outline-danger">Remove</button></td>
                    </tr>`;
    tableBody.innerHTML += uiString;
      });

}
class Display {
    add(book) {
        console.log("Adding to UI");
        let books=localStorage.getItem("Books");
        let booksObj=[];
        if (books == null) {
            booksObj = [];
          } else { 
            booksObj = JSON.parse(books);
          }
          booksObj.push(book);
          localStorage.setItem("Books", JSON.stringify(booksObj));
        //   console.log(booksObj);
        }
       

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }
    e.preventDefault();
}
