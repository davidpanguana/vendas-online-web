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
    padding: 0px;
    width: 80%;
    margin-bottom: 4px;
    text-align: center;
    border: 2px solid #000000ff;
`;