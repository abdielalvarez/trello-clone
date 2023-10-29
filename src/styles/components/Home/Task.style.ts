import styled from "styled-components";

export const TaskContainer = styled.div`
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  width: 100%;
  flex-shrink: 0;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TaskElems = styled.div`
  display: flex;
  width: 65px;
  justify-content: space-between;
`

export const TaskText = styled.p`
  max-width: 180px;
`