import React, { useState } from "react";

export default function Item({ item, handleDeleteItem, handleUpdateItem }) {
    return (
        <li>
            <h3>
                <input
                    type="checkbox"
                    checked={item.packed}
                    onChange={() => handleUpdateItem(item)}
                />
                <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
                    {item.description} ({item.quantity})
                </span>
                <button onClick={() => handleDeleteItem(item)}>❌</button>
            </h3>
        </li>
    );
}