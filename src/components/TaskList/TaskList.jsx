import React, { useState } from "react";
import "./TaskList.css";
import Task from "../Task/Task";
import Modal from "../Modal/Modal";
import { connect } from "react-redux";

import { CompleteTask, EditTask, DeleteTask } from "../../store/actions";

const TaskList = ({ tasks, onCompleteTask, onEditTask, onDeleteTask }) => {
  let [modal, setModal] = useState(false);
  let [editCurrentTask, setEditCurrentTask] = useState({
    id: "",
    date: "",
    description: "",
  });

  const handleCompleteTask = (taskID) => {
    onCompleteTask(taskID);
  };

  const handleEditTask = () => {
    const { id, date, description } = editCurrentTask;
    const newData = { id, date, description, done: false };
    onEditTask(newData);
  };

  const handleDeleteTask = (taskID) => {
    onDeleteTask(taskID);
  };

  const taskList = tasks.map(({ description, date, done }, index) => {
    return (
      <Task
        key={index}
        description={description}
        date={date}
        done={done}
        completeTask={() => handleCompleteTask(index)}
        editTask={() => {
          setEditCurrentTask({
            ...editCurrentTask,
            id: index,
            description,
            date,
          });
          setModal(!modal);
        }}
        deleteTask={() => handleDeleteTask(index)}
      />
    );
  });

  return (
    <div className="container">
      {modal ? (
        <Modal
          currentDate={editCurrentTask.date.split("/").reverse().join("-")}
          getNewDate={(event) => {
            const date = event.target.value.split("-").reverse().join("/");
            setEditCurrentTask({ ...editCurrentTask, date });
          }}
          currentDescription={editCurrentTask.description}
          getNewDescription={(event) =>
            setEditCurrentTask({
              ...editCurrentTask,
              description: event.target.value,
            })
          }
          cancelEdit={() => setModal(!modal)}
          confirmEdit={() => {
            handleEditTask();
            setModal(!modal);
          }}
        />
      ) : (
        ""
      )}
      <ul className="taskList">
        {taskList.length > 0 ? (
          taskList
        ) : (
          <span className="listEmpty">Empty Task List</span>
        )}
      </ul>
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
    onCompleteTask(taskID) {
      dispatch(CompleteTask(taskID));
    },
    onEditTask(taskID) {
      dispatch(EditTask(taskID));
    },
    onDeleteTask(newValue) {
      dispatch(DeleteTask(newValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
