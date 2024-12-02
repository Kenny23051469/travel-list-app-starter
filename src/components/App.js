import React, { useState } from "react";
import PackingList from "./packingList.js";
import Stats from "./Stats.js";
import Form from "./Form.js";

function Logo() {
  return <h1>Kenny's Travel List</h1>;
}

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(targetItem) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== targetItem.id));
  }

  function handleUpdateItem(targetItem) {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === targetItem.id ? { ...item, packed: !item.packed } : item))
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} handleClearItems={handleClearItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} />
      <Stats items={items} />
    </div>
  );
}

export default App;
