import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    "Công việc": { backgroundColor: "#fda821" },
    "Học tập": { backgroundColor: "#15d4c8" },
    "Việc nhà": { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  //ffd12c
  return (
    <button
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
