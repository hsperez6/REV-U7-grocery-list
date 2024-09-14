import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [items, setItems] = useState([
    {
      name: "Apples",
      id: 1,
    },
    {
      name: "Bananas",
      id: 2,
    },
    {
      name: "Pasta",
      id: 3,
    },
    {
      name: "Cookies",
      id: 4,
    },
  ]);

  const handleRemoveItem = (id) => {
    setItems();
  };





  return (
    <div className="grocery-list">
      <Header title="Grocery List" itemTotal={items.length} />

      {/* Grocery List */}
      {items.map((item) => (
        <Item name={item.name} key={item.id} />
      ))}
    </div>
  );
};

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
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity">
      <span className="qty-label">QTY</span>
      <button className="increment" onClick={incrementQuantity}>
        +
      </button>
      <button className="decrement" onClick={decrementQuantity}>
        -
      </button>
      <span className="quantity-amount">{quantity}</span>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
