console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");

// grab the add button ellement
const addBtn = document.querySelector("#add-btn");


//this function will ad items to the users "cart"

const updateList = (event) => {
    const icon = event.target;
    icon.classList.toggle("bi-bag");
    icon.classList.toggle("bi-bag-check");
    icon.classList.toggle("in-cart");
}; //end of updateList

//this function will remove the div
const removeItem = (event) => {
    const icon = event.target;
    icon.parentElement.remove();
}; // end of removeItem

// add button event listener
addBtn.addEventListener("click", () => {

    // get the info from user
    const itemInput = document.querySelector("#item");
    const emojiSelect = document.querySelector("#department");

    const item = itemInput.value.trim();
    const emoji = emojiSelect.value;
    
    if(item) {
        // now create the div
        const itemDiv = buildItem(emoji, item);
        // add item to page
        document.querySelector(".right").append(itemDiv);
    }
    else {
        alert("please enter a name for the item.");
    }

    // user features
    itemInput.value = "";
    itemInput.focus();
    emojiSelect.value = "🥣";
}); // end of addBtn



// this function will build the HTML for each item

function buildItem(emoji, item) {
    //create the html elements
    const itemDiv = document.createElement("div");
    const emojiSpan = document.createElement("span");
    const itemSpan = document.createElement("span");
    const bagIcon = document.createElement("i");
    const trashIcon = document.createElement("i");

    // add the text and class info
    itemDiv.className = "item";
    emojiSpan.className = "emoji";
    emojiSpan.innerText = emoji;
    itemSpan.className = "item-description";
    itemSpan.innerText = item;
    bagIcon.className = "bi bi-bag add-icon";
    trashIcon.className = "bi bi-trash delete-icon";
    bagIcon.addEventListener("click", updateList);
    trashIcon.addEventListener("click", removeItem);

    // build the componet
    itemDiv.append(emojiSpan, itemSpan, bagIcon, trashIcon);

    return itemDiv;
    
    
}; // end of BuildIten