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
      <div className="progress-container">
        <progress value={percentage} max="100" className="progress-bar" />
        <span className={`progress-text`} >
          {percentage}%
        </span>
      </div>
    </footer>
  );
}
