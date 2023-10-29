import React, {
  useState,
  useMemo,
  ChangeEvent
} from 'react'
import {
    FormContainer
} from "@/styles/components/Login/LoginForm.style";
import DynamicInput from "../Input";
import {
  InputDataState,
  IsValidType
} from '@/utils/validations';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { loginAction } from '@/redux/actions/userActions';
import { HOME_ROUTE } from '@/utils/routes';
import { useRouter } from 'next/router';
import Button from '../Button';
import { showToastAction } from '@/redux/actions/toastActions';
import {
  AUTHENTICATION_ERROR,
  NOT_FOUND_USER_API_ERROR,
  USER_CUSTOMIZED_ERROR
} from '@/utils/contants';
import ApiService from '@/services';

const LoginForm = () => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()

    const [inputData, setInputData] = useState<InputDataState>({
        email: {
            value: '',
            isValid: {
                value: null,
                message: ''
            }
        },
        password: {
            value: '',
            isValid: {
                value: null,
                message: ''
            }
        }
    });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setInputData({
        ...inputData,
        [name]: {
            value,
            isValid: inputData[name].isValid
        }
    });
  };

  const handleBlur = (name: string, isValid: IsValidType) => {
    setInputData({
        ...inputData,
        [name]: {
            value: inputData[name].value,
            isValid
        }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {
        email: {
            value: emailValue
        },
        password: {
            value: passwordValue
        }
    } = inputData
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

  const enableSubmit = useMemo(() => {
    if (
        inputData.email.isValid?.value &&
        inputData.password.isValid?.value
    ) {
        return true
    }
    return false
  }, [inputData])

  return (
    <FormContainer onSubmit={handleSubmit}>
      <DynamicInput
        type='text'
        label="Email"
        placeholder="test@gmail.com"
        name='email'
        inputData={inputData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        validationRules={{
            isEmail: [true, 'El campo es requerido'],
            minLength: [1, 'Ingresa más caractéres'],
            maxLength: [100, 'Superaste el máximo de caractéres'],
            isRequired: true
        }}
      />
      <DynamicInput
        type='password'
        label="Password"
        name='password'
        inputData={inputData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        validationRules={{
            minLength: [1, 'Ingresa más caractéres'],
            maxLength: [100, 'Superaste el máximo de caractéres'],
            isRequired: true
        }}
      />
      <Button
        disabled={!enableSubmit}
        type="submit"
        text='Enviar'
      />
    </FormContainer>
  )
};

export default LoginForm;
