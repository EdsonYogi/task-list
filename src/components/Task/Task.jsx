import React, { useState } from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Buttons from "../Buttons/Buttons";

const Task = ({
  date,
  description,
  completeTask,
  editTask,
  deleteTask,
  done,
}) => {
  let [toggle, setToggle] = useState(true);

  const buttonsTask = (
    <div className="buttons">
      <Buttons
        tooltipText="Confirm"
        buttonText={<FontAwesomeIcon icon="check" />}
        buttonClass="btn-primary buttonTask"
        buttonClick={completeTask}
      />
      <Buttons
        tooltipText="Edit"
        buttonText={<FontAwesomeIcon icon="pen" />}
        buttonClass="btn-primary buttonTask"
        buttonClick={editTask}
      />
      <Buttons
        tooltipText="Delete"
        buttonText={<FontAwesomeIcon icon="times" />}
        buttonClass="btn-primary buttonTask"
        buttonClick={deleteTask}
      />
    </div>
  );

  const isDone = (
    <span
      className="done"
      onClick={() => {
        completeTask();
        setToggle(true);
      }}
      onMouseEnter={() => setToggle(!toggle)}
      onMouseLeave={() => setToggle(!toggle)}
    >
      {toggle ? (
        <FontAwesomeIcon icon="check" />
      ) : (
        <FontAwesomeIcon icon="times" />
      )}
    </span>
  );

  return (
    <li className={`task ${done ? "complete" : ""}`}>
      <span className="date">{date}</span>
      <span className="description">{description}</span>
      {!done ? (
        <React.Fragment>{buttonsTask}</React.Fragment>
      ) : (
        <React.Fragment>{isDone}</React.Fragment>
      )}
    </li>
  );
};

export default Task;
