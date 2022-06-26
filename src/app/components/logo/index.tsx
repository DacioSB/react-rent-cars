import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../../assets/RentCar-logos_transparent.png";

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
    ${tw`
        font-bold
        text-xl
        md:text-2xl
        text-main_blue
        m-1
    `}
`;

const LogoImage = styled.div`
    width: auto;
    ${tw`
        h-16
        md:h-20`
    }
    img {
        width: auto;
        height: 100%;
    }
`;

export function Logo() {
    return (
        <LogoContainer>
            <LogoImage>
                <img src={logo} alt="logo" />
            </LogoImage>
            <LogoText>Yourcar.</LogoText>
        </LogoContainer>
    );
}
