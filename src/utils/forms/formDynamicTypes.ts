import { MouseEventHandler, ReactNode } from 'react'
import { ChangeEvent } from 'react'
import { AppDispatch } from "@/redux/store";
import { InputDataState, IsValidType, ValidationRules } from "../validations";
import { NextRouter } from "next/router";
import { StageType, Task } from "@/redux/initialStates/tasks";
import { UserType } from "@/redux/initialStates/user";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type Input = {
    name: string
    label: string
    validationRules?: ValidationRules
    placeholder?: string
    type: string
}

export type SubmitSecondaryActionType = (
    dispatch: AppDispatch,
    user?: UserType,
    tasks?: Task[],
    oldItem?: any
) => void

export type SubmitFnType = (
    e: React.FormEvent,
    body: any,
    dispatch: AppDispatch,
    router: NextRouter,
    stage?: StageType,
    user?: UserType,
    tasks?: Task[],
    setShowInput?: (value: React.SetStateAction<boolean>) => void,
    oldItem?: any
) => void

export type ButtonPropsType = {
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    text: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    backgroundColor?: string
    children?: ReactNode
    submitSecondaryAction?: SubmitSecondaryActionType
    imageUrl?: StaticImport | string
}

export type FormPropsType = {
    inputs: Input[],
    submit: SubmitFnType
    buttonLabel: string
    stage?: StageType
    setShowInput?: (value: React.SetStateAction<boolean>) => void
    oldItem?: any
}

export type FormPropsUIType = {
    inputs: Input[],
    submit: SubmitFnType
    buttonLabel: string
    handleChange: (e: ChangeEvent<HTMLInputElement>, isValid: IsValidType) => void
    handleBlur: (name: string, isValid: IsValidType) => void
    enableSubmit: boolean
    inputData: InputDataState
    stage?: StageType
    setShowInput?: (value: React.SetStateAction<boolean>) => void
    oldItem?: any
}