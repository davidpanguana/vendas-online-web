import styled from "styled-components";

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top:0;
    width:100%;
    height:100vh;
    object-fit: cover;
`;

export const LogoImage = styled.img`
    position: relative;
    margin: auto;
    max-width: 50%;
`;

export const LoginConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    position: absolute;
    right: 0;
    top: 0;
`;

export const LimitedConteiner = styled.div`
    width: 80%;
    max-height:210px;
    position: relative;
    background-color: #f0f;
    text-align: center;
`;