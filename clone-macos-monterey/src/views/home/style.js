import styled from "styled-components";

const ContainerContent = styled.div`
  margin: 0 auto;
  width: 98%;
`;
const Content = styled.div`
  height: 88vh;
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
`;

const MenuBottomContainer = styled.nav`
  background-color: #ffffff40;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  margin: 10px auto 0 auto;
  min-width: 200px;
  max-width: 400px;
  ul {
    display: flex;
    align-items: center;
    gap: 18px;
    justify-content: center;
    li {
      button {
        background-color: transparent;
        border: none;
        cursor: default;
        outline: none;
        padding: 5px 0;
        img {
          border-radius: 8px;
          filter: drop-shadow(-1px 2px 11px #707070);
          transition: filter 0.3s ease;
          width: 50px;
          &:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
          }
        }
      }
      &:last-child{
        button{
          border-left: 1px solid #33333359;
          padding-left: 20px;
        }
      }
    }
  }
`;

const ContainerIllustrator = styled.div`
  background-color: #333;
  border-radius: 10px;
  height: 86vh;
  margin: 0 auto;
  transform: translateY(-690px);
  width: 80%;
  z-index: 1000;
`;

const HeaderWindow = styled.div`
  background-color: #616161;
  border-bottom: 1px solid #272525;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  .actions-left {
    width: 400px;
    .buttons-window {
      display: flex;
      align-items: center;
      gap: 10px;
      button {
        border: none;
        border-radius: 50%;
        height: 15px;
        width: 15px;
        &:nth-child(1) {
          background: linear-gradient(45deg, #ff5f57, #ff4742);
        }
        &:nth-child(2) {
          background: linear-gradient(45deg, #f7d51d, #f7c51d);
        }
        &:nth-child(3) {
          background: linear-gradient(45deg, #58c83b, #4bb732);
        }
      }
    }
  }
`;

const HeaderLogo = styled.div`
  background-color: #3f3e3e;
  display: flex;
  align-items: center;
  padding: 2px 20px;
  img {
    width: 50px;
  }
`;

const ContentEditor = styled.div`
  display: flex;
  gap: 10px;
  .sidebar-editor {
    width: 15%;
    .actions-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px 20px;
      button {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 40px;
        color: #fff;
        padding: 8px 10px;
        width: 120px;
      }
    }
  }
  .workspace-editor {
    background-color: #4b4848;
    min-height: 40vh;
    transform: translateY(10px);
    width: 80%;
  }
`;

const ContainerDesktop = styled.div`
  min-height: 86vh;
  width: 100%;
`;

const OptionsClickRight = styled.div`
  background-color: #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 200px;
  button{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #333;
    color: #fff;
    padding: 8px 10px;
  }
`;

const AreaIcons = styled.div`
  display: flex;
  flex-direction: column;
  .container-link{
    button{
      background-color: transparent;
      border: none;
      color: #fff;
      display: flex;
      flex-direction: column;
      img{
        width: 60px;
      }
      span{
        display: block;
        line-height: 10px;
      }
    }
  }
`;

const OptionsFolder = styled.div`
  background-color: #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: translate(80px, -70px);
  width: 200px;
  button{
    background-color: transparent;
    border-bottom: 1px solid #333;
    color: #fff;
    padding: 5px 10px;
  }
`;

export {
  ContainerContent,
  Content,
  MenuBottomContainer,
  ContainerIllustrator,
  HeaderWindow,
  HeaderLogo,
  ContentEditor,
  ContainerDesktop,
  OptionsClickRight,
  AreaIcons,
  OptionsFolder,
};
