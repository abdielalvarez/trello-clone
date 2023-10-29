import React, {
    useState,
    useMemo,
    ChangeEvent
} from 'react'
import FormComponentUI from "./FormComponentUI";
import {
    InputDataState,
    IsValidType,
} from '@/utils/validations';
import {
    FormPropsType
} from '@/utils/forms/formDynamicTypes';
import { convertToInitialFormValues } from '@/utils/converters';

const Form = ({
    inputs,
    submit,
    buttonLabel,
    stage,
    setShowInput,
    oldItem
}: FormPropsType) => {
    const initialState = convertToInitialFormValues(inputs)
    const [inputData, setInputData] = useState<InputDataState>(initialState);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
        isValid: IsValidType
    ) => {
        const { name, value } = e.target
        setInputData({
            ...inputData,
            [name]: {
                value,
                isValid
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

    const enableSubmit = useMemo(() => {
        const isValidData = Object
            .values(inputData)
            .every(input => Boolean(input.isValid.value))
        if (isValidData) {
            return true
        }
        return false
    }, [inputData])

    return (
        <FormComponentUI
            enableSubmit={enableSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            submit={submit}
            buttonLabel={buttonLabel}
            inputs={inputs}
            inputData={inputData}
            stage={stage}
            setShowInput={setShowInput}
            oldItem={oldItem}
        />
    )
};

export default Form;
