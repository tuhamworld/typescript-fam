// Defining custom type
type Pizza = {
  name: string
  price: number
}


const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

const addNewPizza = (pizzaObj: Pizza) => {
  if (pizzaObj && pizzaObj.name && pizzaObj.price) {
    menu.push(pizzaObj);
  } else {
    console.log("Pizza details incomplete");
  }
};


const placeOrder = (pizzaName: string) => {
  const selectedPizza = menu.find((menuItem) => menuItem.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  console.log(orderQueue);
  console.log("New Order: ", newOrder)
//   console.log(cashInRegister);
  return orderQueue;
};

const completeOrder = (orderId: number) => {
  const orderItem = orderQueue.find((item) => item.id === orderId);
  if (!orderItem) {
    console.error(`${orderItem} does not exist`);
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
console.log("Menu: ", menu)
console.log("Cash In Register: ", cashInRegister)
