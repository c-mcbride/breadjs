//Adds the line item, called from HTML when the Add Category Button is Clicked 
function addBudgetLineItem(){
    console.log("add budgetLineItem is running");

    //Grab reference to the actual DOM list and add the new list node to it
    const actualBudgetList = document.getElementById('budgetLineItemsList');

    actualBudgetList.appendChild(createBudgetLineItem());
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
    budgetCategoryValuesDiv.classList.add("budget-category-values-div");
    budgetCategoryValuesDiv.appendChild(budgetCategoryValueAmountBox);

    //Left Side: Holds line item text
    const budgetCategoryDiv = document.createElement("div");

    //create a budget input textbox
    budgetCategoryDiv.appendChild(createBudgetCategoryTextBox("budgetCategory"));

    //Create list node and return the full line item
    const budgetLineItemContainer = document.createElement("li");
    budgetLineItemContainer.classList.add("budget-line-item-container")
    budgetLineItemContainer.appendChild(budgetCategoryDiv);
    budgetLineItemContainer.appendChild(budgetCategoryValuesDiv);

    
    addAbilitytoDeleteLineItem(budgetLineItemContainer);
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

function addAbilitytoDeleteLineItem(budgetLineItemContainer){

    //Grab a reference to the context menu 
    const contextMenu = document.querySelector(".context");

    //Add the right click context menu functionality to the node before its appended
    //contextmenu is what the browser class it when a user right clicks
    //contextMenu is the HTML name for the ul I created
    budgetLineItemContainer.addEventListener('contextmenu', (event) => {
        console.log("Right click listner is firing");
        event.preventDefault();

        //Move the context menu to the users pointer 
        updateMenuPosition(event.clientX, event.clientY);
        contextMenu.style.visibility = "visible";
    });

    //When the user clicks away, get rid of the context menu
    document.addEventListener("click", () => {
        contextMenu.style.visibility = null;
    });

    //grab x and y from the caller, use it to decide where to open the menu
    const updateMenuPosition = (x,y) => {

        //make it so the menu doesn't appear offscreen
        const maxTopValue = window.innerHeight - contextMenu.offsetHeight;
        const maxLeftValue = window.innerWidth - contextMenu.offsetWidth;

        contextMenu.style.left = `${Math.min(maxLeftValue, x)}px`;
        contextMenu.style.top = `${Math.min(maxTopValue, y)}px`;
    };
}

document.querySelector("#deleteLineItem").addEventListener("click", () => {
    console.log("You clicked the delete line item button");
});

 