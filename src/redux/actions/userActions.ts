import { AppThunk } from '../store';
import { LOGIN_TYPE, LOGOUT_TYPE, ReduxAction } from './actionType';
import ApiService from '@/services';

const apiServices = new ApiService(true)

export const loginAction = (
  email: string,
  password: string
): AppThunk => async dispatch => {
  try {
    const data = await apiServices.login(email, password)
    const action: ReduxAction = {
      type: LOGIN_TYPE,
      payload: {
        email,
        token: data?.token
      },
    };
    dispatch(action);
    return data
  } catch (error) {
    throw error
  }
};

export const logoutAction = (): AppThunk => async dispatch => {
  try {
    await apiServices.logout()
    const action: ReduxAction = {
      type: LOGOUT_TYPE,
      payload: null
    };
    dispatch(action);
  } catch (error) {
    throw error
  }
};
