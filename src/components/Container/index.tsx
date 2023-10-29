import React, { ReactNode } from 'react';
import { ContainerDiv } from '@/styles/components/Container/index.style';

type ContainerDiv = {
  children: ReactNode
  margin?: string
  display?: string
};

export const Container = ({
  children,
  margin,
  display
}: ContainerDiv) => {
    return (
      <ContainerDiv
        margin={margin}
        display={display}
      >
        {children}
      </ContainerDiv>
    );
};