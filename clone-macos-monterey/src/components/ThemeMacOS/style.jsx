import styled from 'styled-components';
import backgroundMacOS from '../../assets/imgs/backgrounds/monterey.png';

const ThemeMacOS = styled.div`
    background-image: url(${backgroundMacOS});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100svh;
    width: 100%;
`;

export {
    ThemeMacOS
};
