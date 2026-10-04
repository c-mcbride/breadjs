//1. Select the line item buttom using css class
const addLineItemButton = document.querySelector('.add-budget-line-item');

//Grab the unordered List
const budgetList = document.querySelector('#budgetLineItems');

/**
 * Grab text the user enters in a single text back. Add it to list on page
 */
function addBudgetLineItem()
{
    var actualBudgetList = document.getElementById('budgetLineItemsList'), //Grab reference to the dom list
        budgetLineItemContainer = document.createElement("li"), //Create list element blank
        budgetCategoryDiv = document.createElement("div"), //create a div to hold the text
        budgetCategoryValuesDiv = document.createElement("div"),
        //Create budget amount textbox....Call Create textbox class
        budgetCategoryValueAmountBox = createTextBox();
      
    //Put user text into text div
    budgetCategoryDiv.textContent = document.getElementById('budgetLineItemTextInput').value;
    budgetCategoryValuesDiv.appendChild(budgetCategoryValueAmountBox); //Add amount input field to values div

    //Add class to the continer for flexbox
    budgetLineItemContainer.classList.add("budget-line-item-container"); //add user entered text to category div
    budgetLineItemContainer.appendChild(budgetCategoryDiv); //Add text div to container
    budgetLineItemContainer.appendChild(budgetCategoryValuesDiv);

    actualBudgetList.appendChild(budgetLineItemContainer); //Add single li container and it's children to the dom
    console.log('Adding line item!');
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
