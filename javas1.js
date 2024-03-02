//Box A-E

//create an empty array
let bookTitles = [];

//create a function to add a book title to the array
function addBookTitle() {
    //get value from text input
    const titleInput = document.getElementById("type1");
    const newTitle = titleInput.value;

    //check if the title is empty
    if (!newTitle.trim()) {
        alert("Please enter a book title :)");
        return;
    }

    //add the title to the array
    bookTitles.push(newTitle);

    //clear the text input
    titleInput.value = "";

    //update the list of books
    updateBookList();
}

//function to update the list of books
function updateBookList() {
    //get the list element where you want to display the books
    const bookList = document.getElementById("p1");

    //clear the current list
    bookList.textContent = "";

    //add each book title to the list
    bookTitles.forEach((title) => {
        const listItem = document.createElement("li");
        listItem.textContent = title;
        bookList.appendChild(listItem);
    });
}

//add event listener to the buttom
const addButton = document.getElementById("one");
addButton.addEventListener("click", addBookTitle);




//Box F-J

//create an empty array
let bookTitless = [];

//create a function to add a book title to the array
function addBookTitles() {
    //get value from text input
    const titleInputs = document.getElementById("type2");
    const newTitles = titleInputs.value;

    //check if the title is empty
    if (!newTitles.trim()) {
        alert("Please enter a book title :)");
        return;
    }

    //add the title to the array
    bookTitless.push(newTitles);

    //clear the text input
    titleInputs.value = "";

    //update the list of books
    updateBookLists();
}

//function to update the list of books
function updateBookLists() {
    //get the list element where you want to display the books
    const bookLists = document.getElementById("p2");

    //clear the current list
    bookLists.textContent = "";

    //add each book title to the list
    bookTitless.forEach((titles) => {
        const listItems = document.createElement("li");
        listItems.textContent = titles;
        bookLists.appendChild(listItems);
    });
}

//add event listener to the buttom
const addButtons = document.getElementById("two");
addButtons.addEventListener("click", addBookTitles);




//Box K-O

//create an empty array
let bookTitlesss = [];

//create a function to add a book title to the array
function addBookTitless() {
    //get value from text input
    const titleInputss = document.getElementById("type3");
    const newTitless = titleInputss.value;

    //check if the title is empty
    if (!newTitless.trim()) {
        alert("Please enter a book title :)");
        return;
    }

    //add the title to the array
    bookTitlesss.push(newTitless);

    //clear the text input
    titleInputss.value = "";

    //update the list of books
    updateBookListss();
}

//function to update the list of books
function updateBookListss() {
    //get the list element where you want to display the books
    const bookListss = document.getElementById("p3");

    //clear the current list
    bookListss.textContent = "";

    //add each book title to the list
    bookTitlesss.forEach((titles) => {
        const listItemss = document.createElement("li");
        listItemss.textContent = titles;
        bookListss.appendChild(listItemss);
    });
}

//add event listener to the buttom
const addButtonss = document.getElementById("three");
addButtonss.addEventListener("click", addBookTitless);





//Box P-T

//create an empty array
let bookTitlessss = [];

//create a function to add a book title to the array
function addBookTitlesss() {
    //get value from text input
    const titleInputsss = document.getElementById("type4");
    const newTitlesss = titleInputsss.value;

    //check if the title is empty
    if (!newTitlesss.trim()) {
        alert("Please enter a book title :)");
        return;
    }

    //add the title to the array
    bookTitlessss.push(newTitlesss);

    //clear the text input
    titleInputsss.value = "";

    //update the list of books
    updateBookListsss();
}

//function to update the list of books
function updateBookListsss() {
    //get the list element where you want to display the books
    const bookListsss = document.getElementById("p4");

    //clear the current list
    bookListsss.textContent = "";

    //add each book title to the list
    bookTitlessss.forEach((titles) => {
        const listItemsss = document.createElement("li");
        listItemsss.textContent = titles;
        bookListsss.appendChild(listItemsss);
    });
}

//add event listener to the buttom
const addButtonsss = document.getElementById("four");
addButtonsss.addEventListener("click", addBookTitlesss);




//Box U-Z

//create an empty array
let bookTitlesssss = [];

//create a function to add a book title to the array
function addBookTitlessss() {
    //get value from text input
    const titleInputssss = document.getElementById("type5");
    const newTitlessss = titleInputssss.value;

    //check if the title is empty
    if (!newTitlessss.trim()) {
        alert("Please enter a book title :)");
        return;
    }

    //add the title to the array
    bookTitlesssss.push(newTitlessss);

    //clear the text input
    titleInputssss.value = "";

    //update the list of books
    updateBookListssss();
}

//function to update the list of books
function updateBookListssss() {
    //get the list element where you want to display the books
    const bookListssss = document.getElementById("p5");

    //clear the current list
    bookListssss.textContent = "";

    //add each book title to the list
    bookTitlesssss.forEach((titles) => {
        const listItemssss = document.createElement("li");
        listItemssss.textContent = titles;
        bookListssss.appendChild(listItemssss);
    });
}

//add event listener to the buttom
const addButtonssss = document.getElementById("five");
addButtonssss.addEventListener("click", addBookTitlessss);