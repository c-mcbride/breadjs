//1. Select the line item buttom using css class
const addLineItemButton = document.querySelector('.add-budget-line-item');

//Grab the unordered List
const budgetList = document.querySelector('#budgetLineItems');

//This touches the dom and adds the list item on click
function addBudgetLineItem(){
    console.log("add budgetLineItem is running");

    const categoryText = document.getElementById('budgetLineItemTextInput').value;

    //Grab reference to the actual DOM list and add the new list node to it
    const actualBudgetList = document.getElementById('budgetLineItemsList'); 
    actualBudgetList.appendChild(createBudgetLineItem(categoryText));
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
function createBudgetLineItem(categoryText){
    //Right side div: Create inner most value box 
    const budgetCategoryValueAmountBox = createTextBox();

    const budgetCategoryValuesDiv = document.createElement("div");
    budgetCategoryValuesDiv.classList.add("budget-category-values-div");
    budgetCategoryValuesDiv.appendChild(budgetCategoryValueAmountBox);

    //Left Side: Holds line item text
    const budgetCategoryDiv = document.createElement("div");
    budgetCategoryDiv.textContent = categoryText;

    //Create list node and return the full line item
    const budgetLineItemContainer = document.createElement("li");
    budgetLineItemContainer.classList.add("budget-line-item-container")
    budgetLineItemContainer.appendChild(budgetCategoryDiv);
    budgetLineItemContainer.appendChild(budgetCategoryValuesDiv);

    return budgetLineItemContainer;
}


//Used to create a budgeted amount checkbox
function createTextBox(){
    //Step 1: create the input element
    const textBox = document.createElement("input");

    //Step 2. Configure it as a text box
    textBox.type = "text";
    textBox.placeholder = "budgeted amount";
    textBox.className = "budget-amount-textbox";
    return textBox;
}