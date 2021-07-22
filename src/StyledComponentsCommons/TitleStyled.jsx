import styled from "styled-components";

export const TitleStyled = styled.label`
  font-size: ${(props) => (props.fontSizeTitle ? props.fontSizeTitle : "18pt")};
  font-weight: 600;
  color: ${(props) => (props.colorTitle ? props.colorTitle : "black")};
  padding-top: 5px;
  padding-top: 5px;
`;
