import { useEffect } from "react";
import { useRouter } from 'next/router'
import { LOGIN_ROUTE } from "@/utils/routes";
import { Wrapper } from '@/layout/Wrapper';
import TrelloBoard from '@/components/Home/TrelloBoard';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store';
import { getAction } from '@/redux/actions/tasksActions';
import { selectUser } from '@/redux/initialStates/selectors';
import { GET_ERROR, LOGIN_ERROR } from "@/utils/contants";
import { showToastAction } from "@/redux/actions/toastActions";

const Home = () => {

    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter();
    const user = useSelector(selectUser);

    const handleAction = async () => {
        try {
            await dispatch(getAction(Boolean(user?.token)))
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        if (!user?.token) {
            dispatch(showToastAction(LOGIN_ERROR))
            router.push(LOGIN_ROUTE)
        }
        handleAction()
            .catch(() => dispatch(showToastAction(GET_ERROR)))
    }, [])

    return (
        <Wrapper>
            <TrelloBoard />
        </Wrapper>
    )
};

export default Home;
