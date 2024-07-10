import React, { useState } from "react";
import "./DropArea.css";
const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={(e) => {
        onDrop(e);
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? "drop_area" : "hide_drop"}
    >
      Thả ở đây
    </section>
  );
};

export default DropArea;
