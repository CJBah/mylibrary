let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let newBookTitle = bookForm.title.value;
    let newBookAuthor = bookForm.author.value;
    let newBookPages = bookForm.pages.value;
    let newBookReadStatus = true; 
    myLibrary.push(new Book(newBookTitle, newBookAuthor, newBookPages, newBookReadStatus));    
}

function openEditForm(){
    document.querySelector("#editFormDiv").style.display = "block";
}

function clearValues(){
    bookForm.title.value = "";
    bookForm.author.value = "";
    bookForm.pages.value = "";
}

function clearValuesEdit(){
    editForm.title.value = "";
    editForm.author.value = "";
    editForm.pages.value = "";
}

function displayBook() {
    for (let i = 0; i<myLibrary.length; i++) {
        let newBookDiv = document.createElement("div");
        let newBookPar1 = document.createElement("p");
        newBookPar1.textContent = myLibrary[i].title;
        let newBookPar2 = document.createElement("p");
        newBookPar2.textContent = "by " + myLibrary[i].author;
        let newBookPar3 = document.createElement("p");
        newBookPar3.textContent = "Pages: " + myLibrary[i].pages;
        newBookDiv.appendChild(newBookPar1);
        newBookDiv.appendChild(newBookPar2);
        newBookDiv.appendChild(newBookPar3);

        let updateBookButton = document.createElement("button"); 
        updateBookButton.setAttribute("id","updateBookButton");
        updateBookButton.setAttribute("data", i);
        updateBookButton.textContent = "✏️";
        updateBookButton.onclick = function(){
            openEditForm()
        }
        
        let closeEditButton = document.querySelector("#closeEditForm")
        closeEditButton.onclick = function(){
            myLibrary[i].title = editForm.title.value;
            myLibrary[i].author = editForm.author.value;
            myLibrary[i].pages = editForm.pages.value;
            document.querySelector("#editFormDiv").style.display = "none";
            clearDiv();
            displayBook();
            clearValuesEdit();
        }

        let deleteBookButton = document.createElement("button");
        deleteBookButton.setAttribute("id","deleteBookButton");
        deleteBookButton.setAttribute("data", i);
        deleteBookButton.textContent = "🗑️";
        deleteBookButton.onclick = function(){
            myLibrary.splice(i,1);
            clearDiv();
            displayBook();
        }

        let readStatusButton = document.createElement("button");
        readStatusButton.setAttribute("data", i);
        if (myLibrary[i].read == true) {
            readStatusButton.textContent = "✅";
        } else if (myLibrary[i].read == false) {
            readStatusButton.textContent = "❎"
        }
        readStatusButton.onclick = function(){
            if (myLibrary[i].read == true) {
                myLibrary[i].read = false;
                readStatusButton.textContent = "❎"
            }
            else if (myLibrary[i].read == false) {
                myLibrary[i].read = true;
                readStatusButton.textContent = "✅"
            }
        }

        newBookDiv.appendChild(updateBookButton);
        newBookDiv.appendChild(deleteBookButton);
        newBookDiv.appendChild(readStatusButton);
        newBookDiv.classList.add("singleBookDiv");
        
        displayBookDiv.appendChild(newBookDiv);

    }
}

function clearDiv () {
    displayBookDiv.innerHTML = ""
}

const addBookButton = document.querySelector("#addBook");
const displayBookDiv = document.querySelector("#displayBook");
const bookForm = document.querySelector(".form-container");
const editForm = document.querySelector("#editForm");

addBookButton.onclick = function(){
    addBookToLibrary();
    clearDiv();
    displayBook();
    clearValues();
}