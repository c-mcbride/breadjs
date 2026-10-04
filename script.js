//1. Select the line item buttom using css class
const addLineItemButton = document.querySelector('.add-budget-line-item');

//Grab the unordered List
const budgetList = document.querySelector('#budgetLineItems');

//2. Add the event listener 
addLineItemButton.addEventListener('click', (event) => {
    console.log('Button was clicked!', event);
});

/**
 * Grab text the user enters in a single text back. Add it to list on page
 */
function addBudgetLineItem()
{
    var textUserEntered = document.getElementById('budgetLineItemTextInput').value, //Grab text from input box
        listNode = document.getElementById('budgetLineItemsList'), //Create a list node to add
        nodeElementToAdd = document.createElement("li"), //Create list element blank
        textToAddToLiNode = document.createTextNode(textUserEntered); //add text the user entered to blank node
    
    nodeElementToAdd.classList.add("budget-line-item");
    nodeElementToAdd.appendChild(textToAddToLiNode);
    listNode.appendChild(nodeElementToAdd);

    console.log('Adding line item!');
}


//Add items to the list when the user enters a field and submits
