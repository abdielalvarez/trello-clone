import { Task, TaskWithId } from '../initialStates/tasks';
import { AppThunk } from '../store';
import {
  CREATE_TASK_TYPE,
  DELETE_TASK_TYPE,
  GET_TASKS_TYPE,
  RESET_TASKS_TYPE,
  UPDATE_TASK_TYPE,
  ReduxAction,
  RESET_LAST_TASKS_TYPE,
} from './actionType';
import ApiService from '@/services';

export const getAction = (isLogged: boolean): AppThunk => async dispatch => {
  try {
    const apiServices = new ApiService(isLogged)
    const payload = await apiServices.getTasks(1, 12)
    const payloadMapped = payload.map((task: Task) => {
      task['stage'] = 'BACKLOG'
      return task
    })
    const action: ReduxAction = {
      type: GET_TASKS_TYPE,
      payload: payloadMapped
    };
    dispatch(action);
  } catch (error) {
    throw error
  }
};

export const resetAction = (): AppThunk => dispatch => {
  const action: ReduxAction = {
    type: RESET_TASKS_TYPE,
    payload: [],
  };
  dispatch(action);
};

export const createAction = (
  isLogged: boolean,
  task: Task,
  oldTaskList: Task[]
): AppThunk => async dispatch => {
  try {
    const apiServices = new ApiService(isLogged)
    const payload = await apiServices.createTask(task)
    const action: ReduxAction = {
      type: CREATE_TASK_TYPE,
      payload
    };
    dispatch(action);
    return payload
  } catch (error) {
    const action: ReduxAction = {
      type: RESET_LAST_TASKS_TYPE,
      payload: oldTaskList
    };
    dispatch(action);
    throw error
  }
};

export const updateAction = (
  isLogged: boolean,
  task: TaskWithId,
  oldTask: TaskWithId
): AppThunk => async dispatch => {
  try {
    const action: ReduxAction = {
      type: UPDATE_TASK_TYPE,
      payload: task
    };
    dispatch(action);
    const apiServices = new ApiService(isLogged)
    const updatedTask = await apiServices.updateTask(task)
    return updatedTask
  } catch (error) {
    const action: ReduxAction = {
      type: UPDATE_TASK_TYPE,
      payload: oldTask
    };
    dispatch(action);
    throw error
  }
};

export const deleteAction = (
  isLogged: boolean,
  id: number,
  oldTasks: Task[]
): AppThunk => async dispatch => {
  try {
    const action: ReduxAction = {
      type: DELETE_TASK_TYPE,
      payload: id
    };
    dispatch(action);
    const apiServices = new ApiService(isLogged)
    const deletedId = await apiServices.deleteTask(id)
    return deletedId
  } catch (error) {
    const action: ReduxAction = {
      type: RESET_LAST_TASKS_TYPE,
      payload: oldTasks
    };
    dispatch(action);
    throw error
  }
};