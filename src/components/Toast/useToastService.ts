import { TOAST_DURATION_MILISECONDS } from '@/utils/contants';
import { useState } from 'react';

const useToastService = () => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
      setToastMessage('');
    }, TOAST_DURATION_MILISECONDS);
  };

  return {
    toastMessage,
    isToastVisible,
    showToast,
    setIsToastVisible,
    setToastMessage
  };
};

export default useToastService;
