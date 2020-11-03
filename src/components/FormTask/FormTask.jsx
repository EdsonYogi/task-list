import React, { useState, useRef } from "react";
import "./FormTask.css";
import { connect } from "react-redux";
import { UpdateTaskList } from "../../store/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Buttons from "../Buttons/Buttons";

const FormTask = ({ tasks, onUpdateTaskList }) => {
  const initialTask = {
    description: "",
    date: new Date().toLocaleDateString(),
    done: false,
  };

  let [toggleFormTask, setToggleFormTask] = useState(false);
  let [task, setTask] = useState(initialTask);

  const inputFocus = useRef(null);
  const handleFocus = () => {
    inputFocus.current.focus();
  };

  const confirmAddNewTask = (event) => {
    event.preventDefault();
    if (task.description) {
      tasks.push(task);
      onUpdateTaskList(tasks);
      setTask(initialTask);
    }
  };

  return (
    <div className="formTask">
      <div className="container">
        <Buttons
          tooltipText="Add New Task"
          buttonText={
            !toggleFormTask ? <FontAwesomeIcon icon="plus" /> : "New Task"
          }
          buttonClass={`btn-primary addTask ${toggleFormTask ? "active" : ""}`}
          buttonClick={() => {
            setToggleFormTask(true);
            handleFocus();
          }}
        />
        <form className={`form ${toggleFormTask ? "active" : ""}`}>
          <div className="fields">
            <div className="date">
              <label>Date</label>
              <input
                type="date"
                name="Date"
                onChange={(event) => {
                  const date = event.target.value
                    .split("-")
                    .reverse()
                    .join("/");
                  setTask({
                    ...task,
                    date: date,
                  });
                }}
              />
            </div>
            <div className="description">
              <label>Description</label>
              <input
                type="text"
                name="Description"
                ref={inputFocus}
                value={task.description}
                onChange={(event) =>
                  setTask({ ...task, description: event.target.value })
                }
              />
            </div>
          </div>
          <div className="buttons">
            <Buttons
              tooltipText="Confirm"
              buttonText={<FontAwesomeIcon icon="check" />}
              buttonClass="btn-primary"
              buttonClick={(e) => confirmAddNewTask(e)}
            />
            <Buttons
              tooltipText="Cancel"
              buttonText={<FontAwesomeIcon icon="times" />}
              buttonClass="btn-primary"
              buttonClick={() => {
                setTask(initialTask);
                setToggleFormTask(false);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { tasks } = state.TaskList;
  return {
    tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateTaskList(newValue) {
      dispatch(UpdateTaskList(newValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormTask);
