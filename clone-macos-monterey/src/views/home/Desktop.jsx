import React, { useState, useRef, useEffect } from "react";
import {
  ContainerDesktop,
  OptionsClickRight,
  AreaIcons,
  OptionsFolder,
} from "./style";
import folder from "../../assets/imgs/icons/macos/pasta.png";

const Desktop = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [links, setLinks] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(null);
  const [editingFolderIndex, setEditingFolderIndex] = useState(null);
  const [folderName, setFolderName] = useState("");
  const [newFolderName, setNewFolderName] = useState("");

  const containerRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleRightClick = (e) => {
    e.preventDefault();
    const isContainerLink = e.target.closest('.container-link');
    if (!isContainerLink) {
      setShowOptions(true);
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleNewFolderClick = () => {
    const newLinks = [...links];
    newLinks.push(`/nova-pasta${newLinks.length + 1}`);
    setLinks(newLinks);
    setShowOptions(false);
  };

  const handleContainerLinkClick = (index) => {
    setSelectedFolderIndex(index);
    setEditingFolderIndex(null);
    setFolderName("Nova pasta");
  };

  const handleContainerLinkContextMenu = (e, index) => {
    e.preventDefault();
    setSelectedFolderIndex(index);
    setEditingFolderIndex(null);
    setFolderName("Nova pasta");
  };

  const handleRenameFolderClick = (index) => {
    setEditingFolderIndex(index);
    setNewFolderName(folderName);
  };

  const handleFolderNameChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleSaveRenameClick = () => {
    const newLinks = [...links];
    newLinks[selectedFolderIndex] = newFolderName;
    setLinks(newLinks);
    setEditingFolderIndex(null);
  };

  return (
    <ContainerDesktop
      ref={containerRef}
      onContextMenu={handleRightClick}
    >
      <AreaIcons>
        {links.map((link, index) => (
          <div
            className="container-link"
            key={index}
            onClick={() => handleContainerLinkClick(index)}
            onContextMenu={(e) => handleContainerLinkContextMenu(e, index)}
          >
            <button>
              <img src={folder} alt="ícone de pasta" />
              {editingFolderIndex === index ? (
                <input
                  type="text"
                  value={newFolderName}
                  onChange={handleFolderNameChange}
                />
              ) : (
                <span className="name-folder">Nova pasta</span>
              )}
            </button>
            {selectedFolderIndex === index && (
              <OptionsFolder>
                <button className="rename-folder" onClick={() => handleRenameFolderClick(index)}>Renomear pasta</button>
                <button>Excluir pasta</button>
              </OptionsFolder>
            )}
          </div>
        ))}
      </AreaIcons>
      {showOptions && (
        <OptionsClickRight
          ref={optionsRef}
          style={{ position: "absolute", top: position.y, left: position.x }}
        >
          <button onClick={handleNewFolderClick}>Nova pasta</button>
          <button>Obter informação</button>
          <button>Limpar</button>
        </OptionsClickRight>
      )}
    </ContainerDesktop>
  );
};

export default Desktop;
