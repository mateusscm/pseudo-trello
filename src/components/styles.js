import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 18px);
`;

export const WorkspaceTrello = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
`;

export const Header = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 4px;
  margin-bottom: 4px;
  position: relative;
  background: rgba(0, 0, 0, 0.32);
  span {
    display: block;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: 10px;
    font-weight: bold;
    color: white;
  }
`;
