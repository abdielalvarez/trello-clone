import { AppDispatch } from "@/redux/store";
import { ButtonPropsType, Input } from "./formDynamicTypes";
import { InputDataState } from "../validations";
import { NextRouter } from "next/router";
import { CREATE_ERROR, CREATE_SUCCESSFUL } from "../constants";
import { showToastAction } from "@/redux/actions/toastActions";
import { createAction } from "@/redux/actions/tasksActions";
import { StageType, Task } from "@/redux/initialStates/tasks";
import { UserType } from "@/redux/initialStates/user";

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

export const handleSubmit = async (
    e: React.FormEvent,
    body: InputDataState,
    dispatch: AppDispatch,
    router: NextRouter,
    stage?: StageType,
    user?: UserType,
    tasks?: Task[] ,
    setShowInput?: (value: React.SetStateAction<boolean>) => void | undefined
) => {
    e.preventDefault();
    const bodyToCreate: Task = {
        year: 2000,
        color: "#98B2D1",
        pantone_value: "15-4020",
        name: body.task.value,
        stage: stage as StageType
    };
    const oldTaskList = [
        ...tasks as Task[]
    ]
    try {
        await dispatch(createAction(
            Boolean(user?.token),
            bodyToCreate,
            oldTaskList
        ));
        if (setShowInput) setShowInput(false);
        dispatch(showToastAction(CREATE_SUCCESSFUL));
    } catch (error) {
        if (setShowInput) setShowInput(false);
        dispatch(showToastAction(CREATE_ERROR));
        throw error
    }
};

export const buttonsBeforeSubmit: ButtonPropsType[] = [
    {
        text: 'Añadir tarjeta',
        type: 'button'
    }
]

export const buttonsToSubmit: ButtonPropsType[] = [
    {
        text: 'Agregar tarea',
        type: 'button'
    }
]

