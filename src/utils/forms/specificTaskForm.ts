import { AppDispatch } from "@/redux/store";
import { InputDataState } from "../validations";
import { NextRouter } from "next/router";
import { StageType, Task, TaskWithId } from "@/redux/initialStates/tasks";
import { UserType } from "@/redux/initialStates/user";
import { deleteAction, updateAction } from "@/redux/actions/tasksActions";
import { showToastAction } from "@/redux/actions/toastActions";
import { DELETE_ERROR, DELETE_SUCCESSFUL, UPDATE_ERROR, UPDATE_SUCCESSFUL } from "../contants";
import { ButtonPropsType, Input } from "../converters";

export const inputs: Input[] = [
    {
        type: 'text',
        label: "Tarea",
        placeholder: "Hacer la despensa",
        name: 'task',
        validationRules: {
            minLength: [1, 'Ingresa más caractéres'],
            maxLength: [100, 'Superaste el máximo de caractéres'],
            isRequired: true
        }
    }
]

export const handleUpdate = async (
    e: React.FormEvent,
    body: InputDataState,
    dispatch: AppDispatch,
    router: NextRouter,
    stage?: StageType,
    user?: UserType,
    tasks?: Task[],
    setShowInput?: (value: React.SetStateAction<boolean>) => void | undefined,
    oldItem?: any
) => {
    e.preventDefault()
    const oldTask = {
        ...oldItem as Task, 
    }
    const bodyToCreate: TaskWithId = {
        year: 2000,
        color: "#98B2D1",
        pantone_value: "15-4020",
        name: body.task.value,
        stage: oldItem.stage,
        id: Number(oldItem.id)
    };
    try {
        await dispatch(updateAction(
            Boolean(user?.token),
            bodyToCreate,
            oldTask as TaskWithId
        ));
        if (setShowInput) setShowInput(false);
        dispatch(showToastAction(UPDATE_SUCCESSFUL));
    } catch (error) {
        if (setShowInput) setShowInput(false);
        dispatch(showToastAction(UPDATE_ERROR));
        throw error
    }
}

const handleDelete = async (
    dispatch: AppDispatch,
    user?: UserType,
    tasks?: Task[],
    oldItem?: any,
) => {
    try {
        const oldTasks = [
            ...tasks as Task[]
        ]
        await dispatch(deleteAction(
            Boolean(user?.token),
            Number(oldItem.id),
            oldTasks
        ));
        dispatch(showToastAction(DELETE_SUCCESSFUL));
    } catch (error) {
        dispatch(showToastAction(DELETE_ERROR));
        throw error
    }
}

export const buttonsBeforeSubmit: ButtonPropsType[] = [
    {
        text: 'E',
        type: 'button',
        imageUrl: '/pencil-icon.svg',
        backgroundColor: '#33ff33'
    },
    {
        text: 'B',
        type: 'button',
        imageUrl: '/trash-icon.svg',
        submitSecondaryAction: handleDelete,
        backgroundColor: '#ff6666'
    }
]

export const buttonsToSubmit: ButtonPropsType[] = [
    {
        text: 'Editar tarea',
        type: 'button'
    }
]