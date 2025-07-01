// Defining custom type for Pizza
type Pizza = {
  id: number;
  name: string;
  price: number;
};

// Defining custom type for Order
type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

// Pizza Menu
const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

const orderQueue: Order[] = [];

// Adding new Pizza Function
// Accepts an object without id, assigns id inside

/**
 * Challenge:
 * Fix the addNewPizza function using the Omit utility type. This might
 * require more than just changing the "Pizza" typed `pizzaObj` parameter.
 * Return the new pizza object (with the id added) from the function.
 */

const addNewPizza = (pizzaObj: Omit<Pizza, "id">): Pizza => {
 const newPizza: Pizza = {
      id: nextPizzaId++,
      ...pizzaObj,
    };

    menu.push(newPizza);
    return newPizza;
};

addNewPizza({ name: "Golden morn", price: 25 });
addNewPizza({ name: "Macaroni", price: 15 });
addNewPizza({ name: "Sweet Potatoes", price: 35 });
addNewPizza({ name: "Agbalumo", price: 75 });

// Placing order function
const placeOrder = (pizzaName: string): Order | undefined => {
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
  orderQueue.push(newOrder);
  return newOrder;
};

// Completing Order function
const completeOrder = (orderId: number): Order | undefined => {
  const orderItem = orderQueue.find((item) => item.id === orderId);
  if (!orderItem) {
    console.error(`${orderId} does not exist`);
    return;
  }
  orderItem.status = "completed";
  return orderItem;
};

// Getting Pizza Details (type narrowing)

export const getPizzaDetails = (
  identifier: string | number
): Pizza | undefined => {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "Parameter `identifier` must either be a string or a number"
    );
  }
};

placeOrder("Sweet Potatoes");
placeOrder("Veggie");
placeOrder("Macaroni");
placeOrder("Agbalumo");
completeOrder(1);

console.log("Menu Results: ", menu);
console.log("Cash In Register Results: ", cashInRegister);
console.log("Order in Queue Results: ", orderQueue);
