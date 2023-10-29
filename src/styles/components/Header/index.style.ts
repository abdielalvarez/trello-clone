import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  height: 80px;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  font-size: 18px;
`;

export const Author = styled.small`
  font-size: 12px;
`;