import styled from "styled-components";

export const ColumnContainer = styled.div`
  min-height: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ColumnTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

export const ColumnTaskContainer = styled.div``

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(240, 240, 240);
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 8px;
  margin: 4px;
  width: 300px;
  flex-shrink: 0;
  box-sizing: border-box;
  min-height: 120px;
  max-height: 600px;
  height: fit-content;
`