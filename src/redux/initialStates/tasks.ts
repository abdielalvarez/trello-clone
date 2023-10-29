export type StageType = 'BACKLOG' | 'TO_DO' | 'IN_PROCESS' | 'DONE' | 'RELEASED'

export type Task = {
    id?: number | string,
    name: string
    year: number
    color: string
    pantone_value: string
    stage: StageType
}

export type TaskWithId = {
    id: number | string,
    name?: string
    year?: number
    color?: string
    pantone_value?: string
    stage?: StageType
}

export type Columns = Record<
    StageType,
    Task[]
>;

export interface TasksState {
    tasks: Task[]
}

export const initialState: TasksState = {
    tasks: []
};