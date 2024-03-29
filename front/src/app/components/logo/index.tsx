import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../../assets/RentCar-logos_transparent.png";
import logoblack from "../../../assets/RentCar-logos_black.png";

interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}

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
    ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

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

export function Logo(props: ILogoProps) {
    const { color, bgColor } = props;
    return (
        <LogoContainer>
            <LogoImage>
                <img src={bgColor === "dark" ? logoblack : logo} alt="logo" />
            </LogoImage>
            <LogoText color={color || "dark"}>Yourcar.</LogoText>
        </LogoContainer>
    );
}
