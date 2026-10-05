//1. Select the line item buttom using css class
const addLineItemButton = document.querySelector('.add-budget-line-item');

//Grab the unordered List
const budgetList = document.querySelector('#budgetLineItems');

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
function addBudgetLineItem(){
    console.log("add budgetLineItemtoDOm is runningfunction is running");
    const categoryText = document.getElementById('budgetLineItemTextInput').value;
    const actualBudgetList = document.getElementById('budgetLineItemsList');
    actualBudgetList.appendChild(createBudgetLineItem(categoryText));
}

function createBudgetLineItem(categoryText){
    //Right side div: Create inner most value box 
    const budgetCategoryValueAmountBox = createTextBox();

    const budgetCategoryValuesDiv = document.createElement("div");
    budgetCategoryValuesDiv.classList.add("budget-category-values-div");
    budgetCategoryValuesDiv.appendChild(budgetCategoryValueAmountBox);

    //Left Side: Holds line item text
    const budgetCategoryDiv = document.createElement("div");
    budgetCategoryDiv.textContent = categoryText;

    //Create list node and return it
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


//Add items to the list when the user enters a field and submits
