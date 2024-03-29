import React, { useState } from "react";
import {
  ContainerContent,
  Content,
  MenuBottomContainer,
} from "./style";
import DockIcon from "../../assets/imgs/icons/dock.png";
import Illustrator from "../../assets/imgs/icons/adobe_illustrator.png";
import photoShop from "../../assets/imgs/icons/adobe_photoshop.png";
import lixeira from "../../assets/imgs/icons/lixeira.png";
import vsc from "../../assets/imgs/icons/vsc.png";

import IllustratorEditor from "./Illustrator";
import Desktop from "./Desktop";

const Home = () => {
  const [dockVisible, setDockVisible] = useState(false);
  const [illustratorVisible, setIllustratorVisible] = useState(false);
  const [photoshopVisible, setPhotoshopVisible] = useState(false);

  const toggleDockVisibility = () => {
    setDockVisible(!dockVisible);
    setIllustratorVisible(false);
    setPhotoshopVisible(false);
  };

  const toggleIllustratorVisibility = () => {
    setIllustratorVisible(!illustratorVisible);
    setDockVisible(false);
    setPhotoshopVisible(false);
  };

  const togglePhotoshopVisibility = () => {
    setPhotoshopVisible(!photoshopVisible);
    setDockVisible(false);
    setIllustratorVisible(false);
  };

  return (
    <ContainerContent>
      <Content>
        <Desktop></Desktop>
        {dockVisible && <div className="animated-div">Conteúdo do Dock</div>}
        {illustratorVisible && <IllustratorEditor />}
        {photoshopVisible && (
          <div className="animated-div">Conteúdo do Photoshop</div>
        )}
      </Content>
      <MenuBottomContainer>
        <ul>
          <li>
            <button onClick={toggleDockVisibility}>
              <img src={DockIcon} alt="Dock" />
            </button>
          </li>
          <li>
            <button onClick={toggleIllustratorVisibility}>
              <img src={Illustrator} alt="Illustrator" />
            </button>
          </li>
          <li>
            <button onClick={togglePhotoshopVisibility}>
              <img src={photoShop} alt="Photoshop" />
            </button>
          </li>
          <li>
            <button onClick={togglePhotoshopVisibility}>
              <img src={vsc} alt="Photoshop" />
            </button>
          </li>
          <li>
            <button>
              <img src={lixeira} alt="Lixeira" />
            </button>
          </li>
        </ul>
      </MenuBottomContainer>
    </ContainerContent>
  );
};

export default Home;
