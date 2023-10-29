import React, { useState } from 'react';
import { StageType } from '@/redux/initialStates/tasks';
import { ButtonPropsType, Input, SubmitFnType } from '@/utils/forms/formDynamicTypes';
import { useSelector, useDispatch } from 'react-redux'
import { selectTasks, selectUser } from '@/redux/initialStates/selectors';
import { AppDispatch } from '@/redux/store';
import DynamicFormComponentUI from './DynamicFormComponentUI';

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
        <DynamicFormComponentUI
            stage={stage}
            buttonCancelLabel={buttonCancelLabel}
            inputs={inputs}
            submits={submits}
            buttonsBeforeSubmit={buttonsBeforeSubmit}
            buttonsToSubmit={buttonsToSubmit}
            showInput={showInput}
            setShowInput={setShowInput}
            oldItem={oldItem}
            handleButtonBeforeSubmit={handleButtonBeforeSubmit}
            buttonSelected={buttonSelected}
        />
    );
};

export default DynamicForm;
