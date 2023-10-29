import { StageType } from '@/redux/initialStates/tasks';
import Button from '../Button';
import Form from '../Form';
import { Container } from '../Container';
import { ButtonPropsType, Input, SubmitFnType } from '@/utils/forms/formDynamicTypes';
import DynamicButton from '@/components/DynamicButton';

type DynamicFormComponentUIPropsType = {
    stage?: StageType
    buttonCancelLabel: string
    inputs: Input[]
    submits: SubmitFnType[]
    buttonsBeforeSubmit: ButtonPropsType[]
    buttonsToSubmit: ButtonPropsType[]
    showInput: boolean
    setShowInput: React.Dispatch<React.SetStateAction<boolean>>
    oldItem?: any
    handleButtonBeforeSubmit: (button: ButtonPropsType, index: number) => void
    buttonSelected: number
};

const DynamicFormComponentUI: React.FC<DynamicFormComponentUIPropsType> = ({
    stage,
    buttonCancelLabel,
    inputs,
    submits,
    buttonsBeforeSubmit,
    buttonsToSubmit,
    showInput,
    setShowInput,
    oldItem,
    handleButtonBeforeSubmit,
    buttonSelected
}) => {
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
                            onClick={() => setShowInput(false)}
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

export default DynamicFormComponentUI;
