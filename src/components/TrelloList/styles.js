import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
// import { ifProp } from "styled-tools";

export const ContainerCards = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  min-width: 300px;
  padding: 8px;
  margin-right: 8px;
  height: min-content;
  overflow: auto;
  max-height: calc(100vh - 55px);
  position: relative;
`;

export const HeaderList = styled.div`
  position: sticky;
  top: -8px;
  background: #dfe3e6;
  margin: -2px;
`;

export const Card = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  span {
  }
`;

export const InsideContainer = styled.div`
  /* height: auto; */
  /* max-height: calc(100vh - 110px); */
  /* overflow: auto; */
`;

export const AddActionButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  min-width: ${props => `${props.buttonWidth}`};
  height: 36px;
  opacity: ${props => `${props.buttonTextOpacity}`};
  color: ${props => `${props.buttonTextColor}`};
  background-color: ${props => `${props.buttonTextBackground}`};
  &:hover {
    background-color: ${props => `${props.buttonTextHovered}`};
  }
`;

export const Textarea = styled(TextareaAutosize)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

export const Action = styled.div`
  margin: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonAdd = styled.button`
  background-color: #77b55a;
  border-radius: 4px;
  border: 1px solid #4b8f29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 13px;
  text-decoration: none;
  text-transform: uppercase;
`;
