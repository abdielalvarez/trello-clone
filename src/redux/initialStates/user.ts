export type UserType = null | {
    token: string
    email: string
}

export interface UserState {
    user: UserType
}

export const initialState: UserState = {
    user: null
};