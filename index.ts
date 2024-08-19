type Pizza = {
  name: string;
  price: number;
  id?: number;
};

type Order = {
  pizza: Pizza;
  orderId: number;
  status: "ordered" | "completed";
};

let pizzaId = 1;
let cashInRegister = 100;
let orderQueue: Order[] = [];

const menu: Pizza[] = [
  { name: "chicken suya", price: 1500, id: pizzaId++ },
  { name: "sweet chilli", price: 2000, id: pizzaId++ },
  { name: "pepperoni", price: 1000, id: pizzaId++ },
  { name: "chicken bbq", price: 500, id: pizzaId++ },
];

const addNewPizza = (pizza: Omit<Pizza, "id">): Pizza[] => {
  const newPizza: Pizza = {
    id: pizzaId++,
    ...pizza,
  };
  menu.push(newPizza);
  return menu;
};

const placeOrder = (Name: string): Order[] | undefined => {
  let orderId = 1;
  const newOrder = menu.find((item) => item.name === Name);
  if (newOrder) {
    cashInRegister += newOrder.price;
    const orderObject: Order = {
      pizza: {
        name: newOrder.name,
        price: newOrder.price,
        id: orderId,
      },
      status: "ordered",
      orderId,
    };
    orderQueue.push(orderObject);
    console.log(orderQueue);
    orderId++;
    return orderQueue;
  } else return undefined;
};

const completeOrder = (orderId: number): Order[] | undefined => {
  orderQueue.forEach((order: Order) => {
    if (order.orderId === orderId) {
      order.status = "completed";
    }
    return orderQueue;
  });
  return undefined;
};

const getPizzaDetails = (identifier: string | number): Pizza | undefined => {
  menu.forEach((pizza) => {
    if (pizza.name === identifier) {
      console.log(pizza);
      return pizza;
    } else if (pizza.id === identifier) {
      console.log(pizza);
      return pizza;
    } else return "Identifier must be a string or number";
  });
  return undefined;
};

const getPizzaDetails1 = (identifier: string | number): Pizza | undefined => {
  const pizza = menu.find(
    (pizza) => pizza.id === identifier || pizza.name === identifier
  );
  return pizza;
};

addNewPizza({ name: "Suya wings", price: 2000 });
console.log(menu);

// placeOrder("chicken suya");
// console.log(getPizzaDetails1(1));

// console.log(cashInRegister);
// console.log(orderQueue);
