import { useState, FormEvent } from 'react'
import DynamicInput from "../Input";
import { AppDispatch } from '@/redux/store';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button';
import { FormPropsUIType } from '@/utils/forms/formDynamicTypes';
import { FormContainer } from "@/styles/components/Login/LoginForm.style";
import { Container } from '../Container';
import { selectTasks, selectUser } from '@/redux/initialStates/selectors';

const FormComponentUI = ({
    inputs,
    submit,
    buttonLabel,
    handleChange,
    handleBlur,
    enableSubmit,
    inputData,
    stage,
    setShowInput,
    oldItem
}: FormPropsUIType) => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector(selectUser)
    const tasks = useSelector(selectTasks)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true)
        await submit(
            e,
            inputData,
            dispatch,
            router,
            stage,
            user,
            tasks,
            setShowInput,
            oldItem
        )
        setIsSubmitting(false)
    }

    return (
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
            {Object.values(inputs).map((input, index) => {
                const {
                    type,
                    label,
                    placeholder,
                    name,
                    validationRules
                } = input
                return (
                    <Container key={index} margin='0 0 25px'>
                        <DynamicInput
                            type={type}
                            label={label}
                            placeholder={placeholder}
                            name={name}
                            inputData={inputData[name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            validationRules={validationRules}
                        />
                    </Container>
                )
            })}
            <Button
                disabled={!enableSubmit || isSubmitting}
                type="submit"
                text={buttonLabel}
            />
        </FormContainer>
    )
};

export default FormComponentUI;
