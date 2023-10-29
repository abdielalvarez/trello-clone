import { ReduxAction, LOGIN_TYPE, LOGOUT_TYPE } from '../actions/actionType'
import { UserState, initialState } from '../initialStates/user';

function userReducer(
  state = initialState,
  action: ReduxAction
): UserState {
  switch (action.type) {
    case LOGIN_TYPE:
      const { token, email } = action.payload
      return {
        ...state,
        user: {
          token,
          email
        }
      };
    case LOGOUT_TYPE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;
