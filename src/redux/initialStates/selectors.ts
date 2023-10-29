import { RootState } from "../reducers/rootReducer";

export const selectTasks = (state: RootState) => state.tasksReducer.tasks;
export const selectUser = (state: RootState) => state.userReducer.user;
export const selectToast = (state: RootState) => state.toastReducer;
