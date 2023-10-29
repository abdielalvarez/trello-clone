import { AppDispatch } from "@/redux/store";
import { Input } from "../converters";
import { InputDataState } from "../validations";
import { loginAction } from "@/redux/actions/userActions";
import { HOME_ROUTE } from "../routes";
import { NextRouter } from "next/router";
import ApiService from "@/services";
import {
    AUTHENTICATION_ERROR,
    NOT_FOUND_USER_API_ERROR,
    USER_CUSTOMIZED_ERROR
} from "../contants";
import { showToastAction } from "@/redux/actions/toastActions";

export const inputs: Input[] = [
    {
        type: 'email',
        label: "Email",
        placeholder: "test@gmail.com",
        name: 'email',
        validationRules: {
            isEmail: [true, 'Debe ser de tipo email'],
            minLength: [1, 'Ingresa más caractéres'],
            maxLength: [100, 'Superaste el máximo de caractéres'],
            isRequired: true
        }
    },
    {
        type: 'password',
        label: "Password",
        name: 'password',
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
    router: NextRouter
) => {
    e.preventDefault();
    const {
        email: {
            value: emailValue
        },
        password: {
            value: passwordValue
        }
    } = body
    try {
        await dispatch(loginAction(emailValue, passwordValue));
        router.push(HOME_ROUTE)
    } catch (error) {
        const services = new ApiService(false)
        const parsedError = await services.throwError(error as Response, false)
        let errorToShow = AUTHENTICATION_ERROR
        if (parsedError.error === NOT_FOUND_USER_API_ERROR) {
            errorToShow = USER_CUSTOMIZED_ERROR
        }
        dispatch(showToastAction(errorToShow));
        throw error
    }
};