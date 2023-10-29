import {
  SHOW_TOAST,
  HIDE_TOAST
} from '../actions/actionType';

interface ToastState {
  message: string;
  isVisible: boolean;
}

const initialState: ToastState = {
  message: '',
  isVisible: false,
};

const toastReducer = (state = initialState, action: any): ToastState => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        message: action.payload.message,
        isVisible: true,
      };
    case HIDE_TOAST:
      return {
        ...state,
        message: '',
        isVisible: false,
      };
    default:
      return state;
  }
};

export default toastReducer;
