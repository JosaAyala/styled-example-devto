import React from "react";
import { CancelButtonStyled } from "../StyledComponentsCommons/CancelButtonStyled";
import { SuccessButtonStyled } from "../StyledComponentsCommons/SuccessButtonStyled";
import { TitleStyled } from "../StyledComponentsCommons/TitleStyled";
import { StyledMainScreenComponent } from "./StyledMainScreenComponent";

const MainScreenComponent = (props) => {
  return (
    <StyledMainScreenComponent>
      <div className="ContainerDefault">
        <TitleStyled colorTitle="#004e8c" fontSizeTitle="30pt">
          Hola Mundo!!!!
        </TitleStyled>
        <TitleStyled colorTitle="#881798" fontSizeTitle="25pt">
          Hola Mundo!!!!
        </TitleStyled>
        <TitleStyled colorTitle="#00ad56" fontSizeTitle="20pt">
          Hola Mundo!!!!
        </TitleStyled>
        <TitleStyled colorTitle="#ffaa44" fontSizeTitle="16pt">
          Hola Mundo!!!!
        </TitleStyled>
        <CancelButtonStyled>Cancel</CancelButtonStyled>
        <SuccessButtonStyled>Success</SuccessButtonStyled>
      </div>
    </StyledMainScreenComponent>
  );
};

export default MainScreenComponent;
