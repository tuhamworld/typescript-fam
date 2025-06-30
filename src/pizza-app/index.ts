// Defining custom type for Pizza
type Pizza = {
  id: number
  name: string
  price: number
}

// Defining custom type for Order
type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed"
}


// Pizza Menu
const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[]= [];


// Adding new Pizza Function
const addNewPizza = (pizzaObj: Pizza): void => {
  if (pizzaObj && pizzaObj.name && pizzaObj.price) {
    menu.push(pizzaObj);
  } else {
    console.log("Pizza details incomplete");
  }
};


// Placing order function
const placeOrder = (pizzaName: string): Order[] | undefined => {
  const selectedPizza = menu.find((menuItem) => menuItem.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  console.log("New Order: ", newOrder)
  return orderHistory;
};

// Completing Order function
const completeOrder = (orderId: number): Order | undefined => {
  const orderItem = orderHistory.find((item) => item.id === orderId);
  if (!orderItem) {
    console.error(`${orderId} does not exist`);
    return;
  }
  orderItem.status = "completed";
  return orderItem;
};


// Getting Pizza Details (type narrowing)

export const getPizzaDetails = (identifier: string | number) => {
  if (typeof identifier === "string") {
    return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
 } else {
    throw new TypeError("Parameter `identifier` must either be a string or a number");
 }
}

addNewPizza({id: 5, name: "Golden morn", price: 25 });
addNewPizza({id: 6, name: "Macaroni", price: 15 });
addNewPizza({id: 7, name: "Sweet Potatoes", price: 35 });
placeOrder("Sweet Potatoes");
placeOrder("Veggie");
placeOrder("Macaroni");
completeOrder(1);
console.log("Menu: ", menu)
console.log("Cash In Register: ", cashInRegister);
