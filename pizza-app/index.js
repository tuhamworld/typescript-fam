var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
var addNewPizza = function (pizzaObj) {
    if (pizzaObj && pizzaObj.name && pizzaObj.price) {
        menu.push(pizzaObj);
    }
    else {
        console.log("Pizza details incomplete");
    }
};
var placeOrder = function (pizzaName) {
    var selectedPizza = menu.find(function (menuItem) { return menuItem.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    console.log(orderQueue);
    console.log("New Order: ", newOrder);
    //   console.log(cashInRegister);
    return orderQueue;
};
var completeOrder = function (orderId) {
    var orderItem = orderQueue.find(function (item) { return item.id === orderId; });
    if (!orderItem) {
        console.error("".concat(orderItem, " does not exist"));
        return;
    }
    orderItem.status = "completed";
    return orderItem;
};
addNewPizza({ name: "Golden morn", price: 25 });
addNewPizza({ name: "Macaroni", price: 15 });
addNewPizza({ name: "Sweet Potatoes", price: 35 });
placeOrder("Sweet Potatoes");
placeOrder("Veggie");
placeOrder("Macaroni");
completeOrder(1);
console.log("Menu: ", menu);
console.log("Cash In Register: ", cashInRegister);
