import {
    CloseButton,
    ToastContainer,
    ToastMessage
} from '@/styles/components/Toast/index.style';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideToastAction } from '@/redux/actions/toastActions';
import { selectToast } from '@/redux/initialStates/selectors';

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector(selectToast);

  const handleClose = () => {
    dispatch(hideToastAction());
  };

  if (!toast.isVisible) {
    return null;
  }

  return (
    toast.isVisible && (
      <ToastContainer>
        <ToastMessage>{toast.message}</ToastMessage>
        <CloseButton onClick={handleClose}>X</CloseButton>
      </ToastContainer>
    )
  );
};

export default Toast;
