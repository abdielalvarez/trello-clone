import Button from '../Button';
import { Container } from '../Container';
import { ButtonPropsType } from '@/utils/converters';
import Image from 'next/image';

type DynamicButtonPropsType = {
    button: ButtonPropsType
    index: number
    handleButtonBeforeSubmit:
    (button: ButtonPropsType, index: number) => void
};

const DynamicButton: React.FC<DynamicButtonPropsType> = ({
    button,
    index,
    handleButtonBeforeSubmit,
}) => {
    return (
        <Container key={index} margin='0 0 0 3px'>
            <Button
                type={button.type}
                onClick={() => handleButtonBeforeSubmit(button, index)}
                text={button.text}
                backgroundColor={button.backgroundColor}
            >
                {button.imageUrl ?
                    <Image
                        width={15}
                        height={15}
                        src={String(button.imageUrl)}
                        alt={button.text}
                    /> : null
                }
            </Button>
        </Container>
    );
};

export default DynamicButton;
