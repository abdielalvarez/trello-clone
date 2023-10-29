import styled from 'styled-components';

interface ButtonElementProps {
  backgroundcolor?: string;
}

export const ButtonElement = styled.button<ButtonElementProps>`
  background-color: ${(props) => props.backgroundcolor || '#0077ff'};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

ButtonElement.shouldForwardProp =
  (prop) => prop !== 'background-color';
