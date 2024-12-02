import React from "react";

export default function Item({ item, handleDeleteItem, handleUpdateItem }) {
    return (
        <ul>
            <li className={item.packed ? "packed-item" : "unpacked-item"}>
                <h3>
                    <input
                        type="checkbox"
                        checked={item.packed}
                        onChange={() => handleUpdateItem(item)}
                    />
                    <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
                        {item.quantity}x {item.description}
                    </span>
                    <button onClick={() => handleDeleteItem(item)}>❌</button>
                </h3>
            </li>
        </ul>
    );
}