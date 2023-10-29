export type IsValidType = {
    value: boolean | null,
    message?: string
}

export type InputContentInfo = {
    value: string
    isValid: IsValidType
}

export type InputDataState = {
    [x: string]: InputContentInfo
}

export type ValidationRules = {
    minLength?: [number, string] | boolean;
    maxLength?: [number, string] | boolean;
    isAlpha?: [boolean, string];
    isNumeric?: [boolean, string];
    isEmail?: [boolean, string];
    isPhoneNumber?: [boolean, string];
    isRequired?: boolean;
};

const applyValidationRule = (
    rule: keyof ValidationRules,
    value: string,
    rules: ValidationRules
): boolean => {
    switch (rule) {
        case 'minLength':
            if (typeof rules.minLength !== 'boolean') {
                return value.length >= rules.minLength![0];
            }
            return true;
        case 'maxLength':
            if (typeof rules.maxLength !== 'boolean') {
                return value.length <= rules.maxLength![0];
            }
            return true;
        case 'isAlpha':
            if (typeof rules.isAlpha !== 'boolean') {
                return !rules.isAlpha![0] || /^[A-Za-z]+$/.test(value);
            }
            return true;
        case 'isNumeric':
            if (typeof rules.isNumeric !== 'boolean') {
                return !rules.isNumeric![0] || /^[0-9]+$/.test(value);
            }
            return true;
        case 'isEmail':
            if (typeof rules.isEmail !== 'boolean') {
                return !rules.isEmail![0] || /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value);
            }
            return true;
        case 'isPhoneNumber':
            if (typeof rules.isPhoneNumber !== 'boolean') {
                return !rules.isPhoneNumber![0] || /^[0-9]{10}$/.test(value);
            }
            return true;
        default:
            return true;
    }
};

export const validateInput = (value: string, rules: ValidationRules) => {
    if (rules.isRequired && value.trim() === '') {
        return { value: false, message: 'El campo es requerido' };
    }
    for (const rule in rules) {
        if (rule !== 'isRequired' && rules[rule as keyof ValidationRules]) {
            if (!applyValidationRule(rule as keyof ValidationRules, value, rules)) {
                const validationValues = rules[rule as keyof ValidationRules]
                if (Array.isArray(validationValues)) {
                    return { value: false, message: validationValues[1] };
                }
            }
        }
    }
    return { value: true };
};



