import {
  UPDATE_TASK_LIST,
  COMPLETE_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "./actionTypes";

export const UpdateTaskList = (tasks) => ({
  type: UPDATE_TASK_LIST,
  payload: tasks,
});

export const CompleteTask = (taskID) => ({
  type: COMPLETE_TASK,
  payload: taskID,
});

export const EditTask = (tasks) => ({
  type: EDIT_TASK,
  payload: tasks,
});

export const DeleteTask = (taskID) => ({
  type: DELETE_TASK,
  payload: taskID,
});
