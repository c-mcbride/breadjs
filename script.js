//1. Select the line item buttom using css class
const addLineItem = document.querySelector('.add-budget-line-item');

//2. Add the event listener 
addLineItem.addEventListener('click', (event) => {
    console.log('Button was clicked!', event);
});