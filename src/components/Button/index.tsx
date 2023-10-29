import {
    ButtonElement
} from "@/styles/components/Button/index.style";
import { ButtonPropsType } from '@/utils/converters';

const Button = ({
    disabled = false,
    type,
    text,
    onClick,
    backgroundColor,
    children
}: ButtonPropsType) => {
    return (
        <ButtonElement
            disabled={disabled}
            type={type}
            onClick={onClick}
            backgroundcolor={backgroundColor}
        >
            {children ? children : text}
        </ButtonElement>
    )
};

export default Button;
