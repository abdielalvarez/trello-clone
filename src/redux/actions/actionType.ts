export interface ReduxAction {
  type: string
  payload: any
}

export const action = (
  payload: any,
  type: string
): ReduxAction => {
  return {
    type,
    payload,
  };
};

export const GET_TASKS_TYPE = 'GET_TASKS_TYPE';
export const RESET_TASKS_TYPE = 'RESET_TASKS_TYPE';
export const CREATE_TASK_TYPE = 'CREATE_TASK_TYPE';
export const UPDATE_TASK_TYPE = 'UPDATE_TASK_TYPE';
export const DELETE_TASK_TYPE = 'DELETE_TASK_TYPE';
export const RESET_LAST_TASKS_TYPE = 'RESET_LAST_TASKS_TYPE';

export const LOGIN_TYPE = 'LOGIN_TYPE';
export const LOGOUT_TYPE = 'LOGOUT_TYPE';

export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';
