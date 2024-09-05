import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const items = [
  {
    name: "Apples",
    quantity: 5,
    id: 1,
  },
  {
    name: "Bananas",
    quantity: 7,
    id: 2,
  },
  {
    name: "Pasta",
    quantity: 1,
    id: 3,
  },
  {
    name: "Cookies",
    quantity: 12,
    id: 4,
  },
];

const Header = ({ title, itemTotal }) => (
  <header>
    <h1>{title}</h1>
    <span className="total-items">Items: {itemTotal}</span>
  </header>
);

const Item = ({ name, quantity }) => (
  <div className="item">
    <button className="remove-item" />
    <span className="item-name">{name}</span>
    <Counter quantity={quantity} />
  </div>
);

const Counter = ({ quantity }) => (
  <div className="quantity">
    <span className="qty-label">QTY</span>
    <button className="increment">+</button>
    <button className="decrement">-</button>
    <span className="quantity-amount">{quantity}</span>
  </div>
);

const App = ({ initialList }) => (
  <div className="grocery-list">
    <Header title="Grocery List" itemTotal={initialList.length} />

    {/* Grocery List */}
    {initialList.map((item) => (
      <Item name={item.name} quantity={item.quantity} key={item.id} />
    ))}
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App initialList={items} />
  </StrictMode>
);
