//1. Select the line item buttom using css class
const addLineItemButton = document.querySelector('.add-budget-line-item');

//Grab the unordered List
const budgetList = document.querySelector('#budgetLineItems');

//2. Add the event listener 
addLineItemButton.addEventListener('click', (event) => {
    console.log('Button was clicked!', event);
});

function addBudgetLineItem()
{
    var textUserEntered = document.getElementById('budgetLineItem').value,
        listNode = document.getElementById('budgetLineItemsList'),
        nodeElementToAdd = document.createElement("LI"),
        textToAddToLiNode = document.createTextNode(textUserEntered);
    
    nodeElementToAdd.appendChild(textToAddToLiNode);
    listNode.appendChild(nodeElementToAdd);

    console.log('Adding line item!');
}


//Add items to the list when the user enters a field and submits
