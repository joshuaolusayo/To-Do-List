var userInput = document.getElementById("userInput");   // get the user input
var addToList = document.getElementById("enter");       // button to add item to the list
var toDoList = document.querySelector("ul");            // the container for the list items

function confirm() {                                    // check if the item to be added is not empty
    if (userInput.value != "")
        return addItemToList();
}

function confirmEvent(event) {                          // check if the item to be added with the return key is not empty
    if (userInput.value.length > 0 && event.which ===13)
        return addItemToList();
}

function addItemToList() {                              // add item to the list
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    toDoList.appendChild(li);
    userInput.value = "";

    function toggle() {                                 //to distinguish the event that is done.
        li.classList.toggle("done");
    }
    
    li.addEventListener("click", toggle);

    var removeItem = document.createElement("button");  //to remove item from the list
    removeItem.appendChild(document.createTextNode("Remove"));
    li.appendChild(removeItem);
    removeItem.addEventListener("click", removeFromList);

    function removeFromList() {
        li.style.display = "none";
    }
}

addToList.addEventListener("click", confirm);

userInput.addEventListener("keypress", confirmEvent);