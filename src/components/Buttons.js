import React from "react";

const Buttons = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <div className="filters">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`filter-button ${selectedTag === tag ? "active" : ""}`}
          onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
