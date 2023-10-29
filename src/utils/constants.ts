import { StageType } from "@/redux/initialStates/tasks"

type ColumnsType = {
    title: string,
    stage: StageType
}

export const COLUMNS: ColumnsType[] = [
    {
        title: 'BACKLOG',
        stage: 'BACKLOG'
    },
    {
        title: 'TO DO',
        stage: 'TO_DO'
    },
    {
        title: 'IN PROCESS',
        stage: 'IN_PROCESS'
    },
    {
        title: 'DONE',
        stage: 'DONE'
    },
    {
        title: 'RELEASED',
        stage: 'RELEASED'
    },
]

export const TOAST_DURATION_MILISECONDS = 5000
export const LOGIN_ERROR = 'Debes iniciar sesión'
export const LOGOUT_ERROR = 'Ocurrió un error en el servicio de cierre de sesión'
export const AUTHENTICATION_ERROR = 'Ocurrió un error en el servicio de autenticación'
export const NOT_FOUND_USER_API_ERROR = 'user not found'
export const USER_CUSTOMIZED_ERROR = 'Usuario o contraseña incorrecto'
export const GET_ERROR = 'Ocurrió un error en el servicio de obtención de datos'
export const UPDATE_ERROR = 'Ocurrió un error en el servicio de actualización de datos'
export const CREATE_ERROR = 'Ocurrió un error en el servicio de creación de datos'
export const DELETE_ERROR = 'Ocurrió un error en el servicio de eliminación de datos'

export const CREATE_SUCCESSFUL = 'Creaste tu tarea exitosamente'
export const UPDATE_SUCCESSFUL = 'Editaste tu tarea exitosamente'
export const DELETE_SUCCESSFUL = 'Borraste tu tarea existosamente'