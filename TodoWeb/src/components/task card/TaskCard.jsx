import React from "react";
import "./TaskCard.css";
import Tag from "../tag/Tag";
import deleteIcon from "../../assets/recycle-bin.png";
const TaskCard = ({ title, tags, handleDelete, i, setActiveCard }) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(i)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, i) => (
            <Tag key={i} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(i)}>
          <img src={deleteIcon} className="delete_icon"></img>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
