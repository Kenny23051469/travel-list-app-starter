import React from "react";

export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <div>
        <em>
          {percentage === 100 ? 
            "You packed everything!" : 
            `You have ${totalItems} items in the list. You already packed ${packedItems} (${percentage}%).`
          }
        </em>
      </div>
      <div style={{ position: "relative", marginTop: "10px" }}>
        <progress value={percentage} max="100" style={{ width: "100%", height: "75px" }} />
        <span 
          style={{
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            fontWeight: "bold",
            color: percentage === 100 ? "white" : "black"
          }}
        >
          {percentage}%
        </span>
      </div>
    </footer>
  );
}
