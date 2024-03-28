import React, { useState } from "react";
import {
  ContainerIllustrator,
  ContentEditor,
  HeaderLogo,
  HeaderWindow,
} from "./style";
import logoIllustrator from "../../assets/imgs/icons/adobe_illustrator.png";
const IllustratorEditor = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseWindow = () => {
    setIsVisible(false);
  };
  

  return (
    <>
      {isVisible && (
        <ContainerIllustrator>
          <HeaderWindow>
            <div className="actions-left">
              <div className="buttons-window">
                <button onClick={handleCloseWindow}></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </HeaderWindow>
          <HeaderLogo>
            <img src={logoIllustrator} />
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
