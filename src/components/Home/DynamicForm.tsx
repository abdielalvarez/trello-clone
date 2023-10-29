import React, { useState } from 'react';
import { StageType } from '@/redux/initialStates/tasks';
import Button from '../Button';
import Form from '../Form';
import { Container } from '../Container';
import { ButtonPropsType, Input, SubmitFnType } from '@/utils/converters';
import { useSelector, useDispatch } from 'react-redux'
import { selectTasks, selectUser } from '@/redux/initialStates/selectors';
import { AppDispatch } from '@/redux/store';
import DynamicButton from './DynamicButton';

type DynamicFormPropsType = {
    stage?: StageType
    buttonCancelLabel: string
    inputs: Input[]
    submits: SubmitFnType[]
    buttonsBeforeSubmit: ButtonPropsType[]
    buttonsToSubmit: ButtonPropsType[]
    showInput: boolean
    setShowInput: React.Dispatch<React.SetStateAction<boolean>>
    oldItem?: any
};

const DynamicForm: React.FC<DynamicFormPropsType> = ({
    stage,
    buttonCancelLabel,
    inputs,
    submits,
    buttonsBeforeSubmit,
    buttonsToSubmit,
    showInput,
    setShowInput,
    oldItem
}) => {
    
    const user = useSelector(selectUser)
    const tasks = useSelector(selectTasks)
    const dispatch = useDispatch<AppDispatch>()
    const [buttonSelected, setButtonSelected] = useState(0)

    const handleShowInput = (index: number) => {
        setButtonSelected(index)
        setShowInput(true)
    }

    const handleCancel = () => {
        setShowInput(false);
    };

    const handleButtonBeforeSubmit = (
        button: ButtonPropsType,
        index: number
    ) => {
        if (button.submitSecondaryAction) {
            button.submitSecondaryAction(
                dispatch,
                user,
                tasks,
                oldItem
            )
            return
        }
        if (!button.onClick) {
            handleShowInput(index)
        }
        return
    }

    return (
        <>
            {showInput ?
                <Container>
                    <Form
                        inputs={inputs}
                        submit={submits[buttonSelected]}
                        buttonLabel={buttonsToSubmit[buttonSelected]?.text}
                        stage={stage}
                        setShowInput={setShowInput}
                        oldItem={oldItem}
                    />
                    <Container margin='10px 0 0'>
                        <Button
                            type='button'
                            onClick={handleCancel}
                            text={buttonCancelLabel}
                            backgroundColor='red'
                        />
                    </Container>
                </Container> : null
            }
            
            {!showInput ?
                <Container display='flex'>
                    {buttonsBeforeSubmit.map((button, index) => {
                        return (
                            <DynamicButton
                                button={button}
                                index={index}
                                key={index}
                                handleButtonBeforeSubmit={handleButtonBeforeSubmit}
                            />
                        )
                    })}
                </Container> : null
            }
        </>
    );
};

export default DynamicForm;
