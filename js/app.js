'use strict'

// to save all objects 
let all_orders = [];
// each order should have a car image logo.
// each order should have car Order Details ( Customer Name, Car Model, Car Price ) the car price will be a random number between 1000 - 10000.
// As a user, I would like to view all of the Orders that I already added. 

// Whenever you add an order using the form, you should use the local storage in order to get all the Orders from it and render them as a table using DOM.

function Order(custName,carModel,carPrice,carImage){
    this.custName = custName;
    this.carModel = carModel;
    this.carPrice = carPrice;
    this.carImage = carImage;
    all_orders.push(this);
}
function getRandomPrice(min, max){
    min = 1000;
    max = 10000;
    return Math.floor(Math.random() * (max - min)) + min;
}
//handling the form 
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit',showOrders);

function showOrders(event){
    event.preventDefault();

    let name = event.target.name.value;
    let model = model.options[model.selectedIndex].text;
    // let carImage = carImage;

    let newOrder = new Order(name,model);

}

function saveToLocalStorage(){
    let orders = JSON.stringify(all_orders);
    localStorage.setItem('my_orders',orders)

}
function readFromLocalStorage(){

}

// creat table header 
 let myTable = document.getElementById('myTable');

function makeTableHeader(){
    let trEl = document.createElement('tr');
 

    let thEl1 = document.createElement('th');
    thEl1.textContent = "Order Image";
    trEl.appendChild(thEl1);


    let thEl2 = document.createElement('th');
    thEl1.textContent = "Order Detailes";
    trEl.appendChild(thEl2);   
    
    myTable.appendChild(trEl);
}

makeTableHeader();





// creat tableBody
Order.prototype.render = function(){

    let trEl = document.createElement('tr');
    myTable.appendChild(trEl);

//     const img1 = document.getElementById('img1');
// img1.setAttribute('src', '/imgs/2-arrows.png');
    let tdEl1 = document.createElement('td');
    tdEl1.setAttribute
    
    trEl.appendChild(tdEl1);

    let tdEl2 = document.createElement('td');
    tdEl2.textContent  =
   `Costumer Name : ${this.name}\n
    Car Model : ${this.carModel}\n 
    Car price : ${this.carPrice}`

    trEl.appendChild(tdEl2);

}


