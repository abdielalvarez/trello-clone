import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 300px;
  width: 100%;
  background-color: #00CC00;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

export const ToastMessage = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;