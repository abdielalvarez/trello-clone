import React from 'react';
import {
    HeaderContainer,
    Logo,
    Author
} from '@/styles/components/Header/index.style'
import Button from '@/components/Button/index'
import { LOGIN_ROUTE } from '@/utils/routes';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store';
import { logoutAction } from '@/redux/actions/userActions';
import { resetAction } from '@/redux/actions/tasksActions';
import { LOGOUT_ERROR } from '@/utils/constants';
import { showToastAction } from '@/redux/actions/toastActions';
import { selectUser } from '@/redux/initialStates/selectors';

const Header = () => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector(selectUser)

    const handleLogout = async () => {
        try {
            await dispatch(logoutAction());
            await dispatch(resetAction());
            router.push(LOGIN_ROUTE)
        } catch (error) {
            dispatch(showToastAction(LOGOUT_ERROR));
            throw error
        }
    }

  return (
    <HeaderContainer>
      <div>
        <Logo>Trello</Logo>
        <Author>Hecho por Abdiel Alvarez</Author>
      </div>
      {user?.token ?
        <Button
          type='button'
          onClick={handleLogout}
          text='Cerrar sesión'
        /> : null
      }
    </HeaderContainer>
  );
};

export default Header;
