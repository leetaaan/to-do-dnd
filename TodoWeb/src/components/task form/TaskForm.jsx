import React, { useState } from "react";
import Tag from "../tag/Tag";

import "./TaskForm.css";
const TaskForm = ({ setTasks }) => {
  const [data, setData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return data.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (data.tags.some((item) => item === tag)) {
      const filterTags = data.tags.filter((item) => item !== tag);
      setData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, data];
    });
    setData({ task: "", status: "todo", tags: [] });
  };

  return (
    <header className="app_header">
      <img className="logo" src="src/assets/logo-black.png" alt="" />
      <form onSubmit={handleSubmit}>
        <div className="task">
          <input
            type="text"
            name="task"
            value={data.task}
            className="task_input"
            placeholder="Nhập Task"
            onChange={handleChange}
          />
          <select
            className="task_status"
            onChange={handleChange}
            name="status"
            value={data.status}
          >
            <option value="todo">Cần làm</option>
            <option value="doing">Đang thực hiện</option>
            <option value="done">Hoàn thành</option>
          </select>

          <button class="action_has has_saved" aria-label="save" type="submit">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                stroke-linejoin="round"
                stroke-linecap="round"
                data-path="box"
              ></path>
              <path
                d="M7 3L7 8L15 8"
                stroke-linejoin="round"
                stroke-linecap="round"
                data-path="line-top"
              ></path>
              <path
                d="M17 20L17 13L7 13L7 20"
                stroke-linejoin="round"
                stroke-linecap="round"
                data-path="line-bottom"
              ></path>
            </svg>
          </button>
        </div>

        <div className="task_form_bottom_line">
          <div className="">
            <Tag
              tagName="Công việc"
              selectTag={selectTag}
              selected={checkTag("Công việc")}
            />
            <Tag
              tagName="Học tập"
              selectTag={selectTag}
              selected={checkTag("Học tập")}
            />
            <Tag
              tagName="Việc nhà"
              selectTag={selectTag}
              selected={checkTag("Việc nhà")}
            />
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
