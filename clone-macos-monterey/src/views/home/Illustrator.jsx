import React, { useState } from "react";
import {
  ContainerIllustrator,
  ContentEditor,
  HeaderLogo,
  HeaderWindow,
} from "./style";
import logoIllustrator from "../../assets/imgs/icons/macos/adobe_illustrator.png";

const IllustratorEditor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [containerWidth, setContainerWidth] = useState("80%");

  const handleCloseWindow = () => {
    setIsVisible(false);
  };

  const handleSecondButtonClick = () => {
    if (containerWidth === "98%") {
      setContainerWidth("80%");
    } else if (containerWidth === "80%") {
      setIsVisible(false);
    }
  };

  const handleThirdButtonClick = () => {
    setContainerWidth("98%");
  };

  return (
    <>
      {isVisible && (
        <ContainerIllustrator style={{ width: containerWidth }}>
          <HeaderWindow>
            <div className="actions-left">
              <div className="buttons-window">
                <button onClick={handleCloseWindow}></button>
                <button onClick={handleSecondButtonClick}></button>
                <button onClick={handleThirdButtonClick}></button>
              </div>
            </div>
          </HeaderWindow>
          <HeaderLogo>
            <img src={logoIllustrator} alt="Illustrator Logo" />
          </HeaderLogo>
          <ContentEditor>
            <div className="sidebar-editor">
              <ul className="actions-buttons">
                <button>Novo projeto</button>
                <button>Carregar projeto</button>
              </ul>
            </div>
            <div className="workspace-editor"></div>
          </ContentEditor>
        </ContainerIllustrator>
      )}
    </>
  );
};

export default IllustratorEditor;
