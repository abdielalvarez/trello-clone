import styled from 'styled-components';;

interface MainPropsType {
  height?: string
  background?: string
  overflowx?: string
}

export const Main = styled.div<MainPropsType>`
  margin: 80px 0 0;
  height: ${(props) => props.height || '80vh'};
  width: 100%;
  overflow-x: ${(props) => props.overflowx || 'inherit'};
  background: ${(props) => props.background || 'inherit'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Main.shouldForwardProp =
  (prop) =>
    prop !== 'height' &&
    prop !== 'background' &&
    prop !== 'overflow-x';