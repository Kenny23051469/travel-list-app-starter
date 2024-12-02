import React, { useState } from "react";
import Item from "./Item.js";

export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
    return (
      <div className="list">
        <li>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleDeleteItem={handleDeleteItem}
              handleUpdateItem={handleUpdateItem}
            />
          ))}
        </li>
      </div>
    );
  }