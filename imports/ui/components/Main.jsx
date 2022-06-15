import React, { useState } from "react";
import "./Main.css";

import Input from "./Input.jsx";
import Inventory from "./Inventory.jsx";
import Header from "./Header.jsx";

const Main = () => {

    const [items, setItems] = useState([]);
    const [range, setRange] = useState({
        from: 1,
        to: 100
    });

    const addItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const deleteItem = (index) => {
      setItems((items) => {
        return items.filter((e, i) => {
          return i != index;
        });
      });
    };
    
  return (
    <div className="container">
      <Header/>
      <Input range={range} add={addItem} />
      <Inventory items={items} delete={deleteItem} />
    </div>
  );
};

export default Main;
