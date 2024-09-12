import { StrictMode, useState } from "react";
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

const Item = ({ name }) => (
  <div className="item">
    <button className="remove-item" />
    <span className="item-name">{name}</span>
    <Counter />
  </div>
);

const Counter = () => {

  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity( prevQuantity => prevQuantity + 1 );
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity( prevQuantity => prevQuantity - 1 );
    };
  };

  return (
    <div className="quantity">
      <span className="qty-label">QTY</span>
      <button className="increment" onClick={incrementQuantity}>+</button>
      <button className="decrement" onClick={decrementQuantity}>-</button>
      <span className="quantity-amount">{quantity}</span>
    </div>
  );
  
};

const App = ({ initialList }) => (
  <div className="grocery-list">
    <Header title="Grocery List" itemTotal={initialList.length} />

    {/* Grocery List */}
    {initialList.map((item) => (
      <Item name={item.name} key={item.id} />
    ))}
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App initialList={items} />
  </StrictMode>
);
