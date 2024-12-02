import React from "react";
import Item from "./Item.js";

export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
    return (
      <ul className="list">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    );
}
