import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import { Main } from '@/styles/components/Main/index.style';
import { useRouter } from 'next/router';
import { HOME_ROUTE } from '@/utils/routes';

type LayoutProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: LayoutProps) => {

    const { asPath } = useRouter()
    const thisIsHome = asPath === HOME_ROUTE
    const heightLayout = thisIsHome ? 'inherit' : '80vh'
    const backgroundColor = thisIsHome ? '#026aa7' : 'inherit'
    const overflowX = thisIsHome ? 'scroll' : 'inherit'

    return (
      <div>
        <Head>
          <title>Trello Clone</title>
        </Head>
        <Header />
        <Main
          height={heightLayout}
          background={backgroundColor}
          overflowx={overflowX}
        >
          {children}
        </Main>
      </div>
    );
};