import styled from 'styled-components'

const ContainerMenuTop = styled.nav`
    background-color: #ffffff82;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1px 17px;
`;

const ContainerLeft = styled.div`
    width: 70%;
    ul{
        display: flex;
        flex-direction: row;
        gap: 15px;
        li{
            a{
                color: #000;
                cursor: default;
                font-size: 12px;
                font-weight: 600;
            }
        }
    }
`

const ContainerRigth = styled.div`
    width: 260px;
    ul{
        display: flex;
        flex-direction: row;
        gap: 15px;
        li{
            a{
                color: #000;
                cursor: default;
                font-size: 12px;
                font-weight: 600;
            }
        }
    }
`;
  

export{
    ContainerMenuTop,
    ContainerLeft,
    ContainerRigth
}