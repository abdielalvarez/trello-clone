import {
  RESET_LAST_TASKS_TYPE,
  CREATE_TASK_TYPE,
  DELETE_TASK_TYPE,
  RESET_TASKS_TYPE,
  ReduxAction,
  UPDATE_TASK_TYPE
} from '../actions/actionType'
import { GET_TASKS_TYPE } from '../actions/actionType';
import { TasksState, initialState } from '../initialStates/tasks';

function tasksReducer(
  state = initialState,
  action: ReduxAction
): TasksState {
  switch (action.type) {
    case GET_TASKS_TYPE:
      return {
        ...state,
        tasks: action.payload
      };
    case RESET_TASKS_TYPE:
      return {
        ...state,
        tasks: action.payload
      };
    case CREATE_TASK_TYPE:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      };
    case RESET_LAST_TASKS_TYPE:
      return {
        ...state,
        tasks: action.payload
      };
    case UPDATE_TASK_TYPE:
      const updatedTask = action.payload;
      const updatedTasks = state.tasks.map(task => {
        if (task.id === updatedTask.id) {
          return {
            ...task,
            ...updatedTask
          };
        }
        return task
      })
      return {
        ...state,
        tasks: updatedTasks
      };
    case DELETE_TASK_TYPE:
      const taskIdToDelete = action.payload;
      const updatedTasksAfterDeletion =
        state.tasks.filter(task => task.id !== taskIdToDelete);
      return {
        ...state,
        tasks: updatedTasksAfterDeletion
      };
    default:
      return state;
  }
}

export default tasksReducer;
