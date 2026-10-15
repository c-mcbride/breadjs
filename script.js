//Grab a reference to the context menu 
const contextMenu = document.querySelector(".context");

//Used for deletes later
let rowThatWasRightClicked = null;

//Grab a reference to the budget Category conatiner 
const budgetCategoryContainer = document.querySelector('.groups');

function addBudgetCategoryGroup(){
    console.log("add budget category running");

    //CreateDiv to hold the entire category with a button and line items
    const budgetCategoryGroupDiv = document.createElement('div');
    budgetCategoryGroupDiv.classList.add('group');

    //build ul list
    const budgetLineItemList = document.createElement('ul');
    budgetLineItemList.classList.add('group-list');

    /*
    +-----------------------------------------------------------------+
    | categoryNameAndAddButton  (div, .group-header)  |
    |                                                                 |
    |  +---------------------------+   +---------------------------+  |
    |  | createBudgetCategoryText  |   | addBudgetLineItemButton   |  |
    |  | Box("budgetCategoryGroup")|   | (button, "Add Category")  |  |
    |  | (input, swaps to text)    |   |                           |  |
    |  +---------------------------+   +---------------------------+  |
    +-----------------------------------------------------------------+
    */
    const categoryNameAndAddButton = document.createElement('div');
    categoryNameAndAddButton.classList.add('group-header');
    //Add a textbox 
    categoryNameAndAddButton.appendChild(createBudgetCategoryTextBox("budgetCategoryGroup"));
    //Add the button
    const addBudgetLineItemButton = document.createElement('button');
    addBudgetLineItemButton.textContent = 'Add Category';
    addBudgetLineItemButton.classList.add('group-add-button');
    addBudgetLineItemButton.addEventListener('click', () => {
        addBudgetLineItem(budgetLineItemList);
    });
    categoryNameAndAddButton.appendChild(addBudgetLineItemButton);

    budgetCategoryGroupDiv.appendChild(categoryNameAndAddButton);
    budgetCategoryGroupDiv.appendChild(budgetLineItemList);
    budgetCategoryContainer.appendChild(budgetCategoryGroupDiv);
}

//Adds the line item, called from addBudgetCategoryGroup functionwhen the Add Category Button is Clicked 
function addBudgetLineItem(budgetLineItemList){
    console.log("add budgetLineItem is running");
    budgetLineItemList.appendChild(createBudgetLineItem());
}

/*
  +-------------------------------------------------------------------+
  | budgetLineItemContainer  (li, flex container)                     |
  |                                                                   |
  |  +--------------------+              +--------------------------+ |
  |  | budgetCategoryDiv  |              | budgetCategoryValuesDiv  | |
  |  | (category text)    |              |                          | |
  |  |                    |              |  +--------------------+  | |
  |  |                    |              |  | budgetCategoryValue|  | |
  |  |                    |              |  | AmountBox (input)  |  | |
  |  +--------------------+              |  +--------------------+  | |
  |                                      +--------------------------+ |
  +-------------------------------------------------------------------+
*/
function createBudgetLineItem(){
    //Right side div: Create inner most value box 
    const budgetCategoryValueAmountBox = createBudgetCategoryTextBox("budgetAmount");

    const budgetCategoryValuesDiv = document.createElement("div");
    budgetCategoryValuesDiv.classList.add("row-values");
    budgetCategoryValuesDiv.appendChild(budgetCategoryValueAmountBox);

    //Left Side: Holds line item text
    const budgetCategoryDiv = document.createElement("div");

    //create a budget input textbox
    budgetCategoryDiv.appendChild(createBudgetCategoryTextBox("budgetCategory"));

    //Create list node and return the full line item
    const budgetLineItemContainer = document.createElement("li");
    budgetLineItemContainer.classList.add("row")
    budgetLineItemContainer.appendChild(budgetCategoryDiv);
    budgetLineItemContainer.appendChild(budgetCategoryValuesDiv);

    
    addAbilityToDeleteLineItem(budgetLineItemContainer);
    return budgetLineItemContainer;
}

//Create a textbox for budget category, inserts its own class name
function createBudgetCategoryTextBox(textBoxType){
    
    const textBox = document.createElement("input");

    if(textBoxType === "budgetCategory"){
        textBox.type = "text";
        textBox.placeholder = "Category";
        textBox.className = "budget-category-textbox";
    }
    else if(textBoxType === "budgetAmount"){
        textBox.type = "text";
        textBox.placeholder = "budgeted amount";
        textBox.className = "budget-amount-textbox";
    }
    else if(textBoxType === "budgetCategoryGroup"){
        textBox.type = "text";
        textBox.placeholder = "Category Group Name";
        textBox.className = "budget-category-textbox"; //change later if needed
    }
    else{
        console.error("Invalid textBoxType")
    }

    textBox.addEventListener('change', (event) => {
        console.log('budgetLineItemSubmitted Running....')

        //1. Grab the entered value
        const enteredText = event.target.value;

        //if nothing is entered stop
        if(!enteredText.trim()) return;

        //2.Create a new text element
        const textNode = document.createElement('span');
        textNode.textContent = enteredText;

        //3. Swap the input box with the text node
        event.target.replaceWith(textNode);
    });

    return textBox;
}

function updateMenuPosition(x,y){

    //make it so the menu doesn't appear offscreen
    const maxTopValue = window.innerHeight - contextMenu.offsetHeight;
    const maxLeftValue = window.innerWidth - contextMenu.offsetWidth;

    contextMenu.style.left = `${Math.min(maxLeftValue, x)}px`;
    contextMenu.style.top = `${Math.min(maxTopValue, y)}px`;
}

function addAbilityToDeleteLineItem(budgetLineItemContainer){

    //Add the right click context menu functionality to the node before its appended
    //contextmenu is the name of the event when a user right clicks
    //contextMenu is the variable holding the context menu ul from the html file
    budgetLineItemContainer.addEventListener('contextmenu', (event) => {
        console.log("Right click listener is firing");
        event.preventDefault();

        rowThatWasRightClicked = budgetLineItemContainer;

        //Move the context menu to the users pointer 
        updateMenuPosition(event.clientX, event.clientY);
        contextMenu.style.visibility = "visible";
    });
}

document.querySelector("#deleteLineItem").addEventListener("click", () => {
    console.log("You clicked the delete line item button");
    rowThatWasRightClicked.remove();
    rowThatWasRightClicked = null;
});

//When the user clicks away, get rid of the context menu
document.addEventListener("click", () => {
    contextMenu.style.visibility = null;
});

 