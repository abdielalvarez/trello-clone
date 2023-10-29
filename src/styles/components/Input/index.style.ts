import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 4px;
  color: #333;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border-color: #0077ff;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 4px;
`;