import { TOAST_DURATION_MILISECONDS } from '@/utils/constants';
import { Dispatch } from 'redux';
import { HIDE_TOAST, SHOW_TOAST } from './actionType';

export const showToastAction = (message: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: SHOW_TOAST, payload: { message } });
    setTimeout(() => {
      dispatch({ type: HIDE_TOAST });
    }, TOAST_DURATION_MILISECONDS);
  };
};

export const hideToastAction = () => {
  return {
    type: HIDE_TOAST,
  };
};
