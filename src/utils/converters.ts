import { Input } from "./forms/formDynamicTypes";
import { InputDataState } from "./validations";

export const convertToInitialFormValues = (inputs: Input[]): InputDataState => {
    const inputDataState: InputDataState = {};
    inputs.forEach((input) => {
        inputDataState[input.name] = {
            value: '',
            isValid: {
                value: null,
                message: ''
            }
        };
    });
    return inputDataState;
}