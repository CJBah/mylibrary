let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let newBookTitle = prompt("TITOLONE?","TITOLONE")
    let newBookAuthor = prompt("AUTORONE?","AUTORONE")
    let newBookPages = prompt("PAGINONE?","PAGINONE")
    let newBookReadStatus = true; 
    myLibrary.push(new Book(newBookTitle, newBookAuthor, newBookPages, newBookReadStatus));    
}

function displayBook() {
    for (let i = 0; i<myLibrary.length; i++) {
        let newBookDiv = document.createElement("div");
        let newBookPar1 = document.createElement("p");
        newBookPar1.textContent = myLibrary[i].title;
        let newBookPar2 = document.createElement("p");
        newBookPar2.textContent = myLibrary[i].author;
        let newBookPar3 = document.createElement("p");
        newBookPar3.textContent = myLibrary[i].pages;
        newBookDiv.appendChild(newBookPar1);
        newBookDiv.appendChild(newBookPar2);
        newBookDiv.appendChild(newBookPar3);

        let updateBookButton = document.createElement("button");
        updateBookButton.setAttribute("id","updateBookButton");
        updateBookButton.setAttribute("data", i);
        updateBookButton.textContent = "edit";
        updateBookButton.onclick = function(){
            myLibrary[i].title = prompt("Nuovo titolo?",myLibrary[i].title)
            myLibrary[i].author = prompt("Nuovo autore?",myLibrary[i].author)
            myLibrary[i].pages = prompt("Nuove pagine?",myLibrary[i].pages)
            clearDiv();
            displayBook();
        }

        let deleteBookButton = document.createElement("button");
        deleteBookButton.setAttribute("id","deleteBookButton");
        deleteBookButton.setAttribute("data", i);
        deleteBookButton.textContent = "delete";
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

        displayBookDiv.appendChild(updateBookButton);
        displayBookDiv.appendChild(deleteBookButton);
        displayBookDiv.appendChild(readStatusButton);
        displayBookDiv.appendChild(newBookDiv);

    }
}

function clearDiv () {
    displayBookDiv.innerHTML = " "
}

const addBookButton = document.querySelector("#addBook");
const displayBookDiv = document.querySelector("#displayBook");

addBookButton.onclick = function(){
    addBookToLibrary();
    clearDiv();
    displayBook();
}

