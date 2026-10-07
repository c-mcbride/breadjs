//This touches the dom and adds the list item on click
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
    const budgetCategoryValueAmountBox = createBudgetAmountTextBox();

    const budgetCategoryValuesDiv = document.createElement("div");
    budgetCategoryValuesDiv.classList.add("budget-category-values-div");
    budgetCategoryValuesDiv.appendChild(budgetCategoryValueAmountBox);

    //Left Side: Holds line item text
    const budgetCategoryDiv = document.createElement("div");

    //create a budget input textbox
    budgetCategoryDiv.appendChild(createBudgetCategoryTextBox());

    //Create list node and return the full line item
    const budgetLineItemContainer = document.createElement("li");
    budgetLineItemContainer.classList.add("budget-line-item-container")
    budgetLineItemContainer.appendChild(budgetCategoryDiv);
    budgetLineItemContainer.appendChild(budgetCategoryValuesDiv);

    return budgetLineItemContainer;
}

//Create a textbox for budget category, inserts its own class name
function createBudgetCategoryTextBox(){
    
    const textBox = document.createElement("input");

    textBox.type = "text";
    textBox.placeholder = "Category";
    textBox.className = "budget-category-textbox";

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

//Used to create a budgeted amount checkbox
function createBudgetAmountTextBox(){
    //Step 1: create the input element
    const textBox = document.createElement("input");

    //Step 2. Configure it as a text box
    textBox.type = "text";
    textBox.placeholder = "budgeted amount";
    textBox.className = "budget-amount-textbox";
    return textBox;
}
