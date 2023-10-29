import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import GlobalStyles from '@/styles/global/GlobalStyles.style';
import { AppProps } from 'next/app';
import Toast from '@/components/Toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Component {...pageProps} />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
