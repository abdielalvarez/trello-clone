import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { HOME_ROUTE } from "@/utils/routes";
import { selectUser } from "@/redux/initialStates/selectors";
import Form from "@/components/Form";
import { handleSubmit, inputs } from "@/utils/forms/loginForm";
import { Wrapper } from '@/layout/Wrapper';

const Login = () => {

    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user?.token) router.push(HOME_ROUTE)
    }, [])

    return (
        <Wrapper>
            <Form
                inputs={inputs}
                submit={handleSubmit}
                buttonLabel="Enviar"
            />
        </Wrapper>
    )
};

export default Login;
