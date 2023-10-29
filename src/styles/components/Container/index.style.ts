import styled from 'styled-components';

interface ContainerProps {
  margin?: string
  display?: string
}

export const ContainerDiv = styled.div<ContainerProps>`
  margin: ${(props) => props.margin || '0'};
  display: ${(props) => props.display || 'block'};
`;

ContainerDiv.shouldForwardProp =
  (prop) => prop !== 'margin' && prop !== 'display';