import React from "react";
import styles from "styled-components";
import tw from "twin.macro";
import { Logo } from "../../components/logo/index";
import NavItems from "./navitems";

// max-x-2xl means max width of 2xl
// lg: pl-12 indicates that when the screen is less than lg, the padding left will be 12px

const NavbarContainer = styles.div`
    min-height: 68px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

const LogoContainer = styles.div`
    ${tw`
        flex
        items-center
    `}
`;

export function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarContainer>
    );
}
