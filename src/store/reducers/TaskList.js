import {
  UPDATE_TASK_LIST,
  COMPLETE_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "../actions/actionTypes";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("TaskList")) || [],
};

const TaskList = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK_LIST:
      localStorage.setItem("TaskList", JSON.stringify(action.payload));
      return { ...state, tasks: [...action.payload] };

    case COMPLETE_TASK: {
      const taskID = action.payload;
      state.tasks[taskID].done = !state.tasks[taskID].done;
      localStorage.setItem("TaskList", JSON.stringify([...state.tasks]));
      return { ...state, tasks: [...state.tasks] };
    }

    case EDIT_TASK: {
      const { id, date, description, done } = action.payload;
      state.tasks[id] = { description, date, done };
      localStorage.setItem("TaskList", JSON.stringify([...state.tasks]));
      return { ...state, tasks: [...state.tasks] };
    }

    case DELETE_TASK: {
      const taskID = action.payload;
      state.tasks.splice([taskID], 1);
      localStorage.setItem("TaskList", JSON.stringify([...state.tasks]));
      return { ...state, tasks: [...state.tasks] };
    }

    default:
      return state;
  }
};

export default TaskList;
