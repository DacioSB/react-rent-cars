/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";

const ListNavItemsContainer = styles.ul`
    ${tw`
        flex
        list-none
    `}
`;

const NavItem = styles.li<{ menu?: any }>`
    ${tw`
        text-xs
        md:text-base
        font-medium
        text-main_blue
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-main_blue_hover
    `};
    ${({ menu }) =>
        menu &&
        css`
            ${tw`
      text-main_yellow
      text-xl
      mb-3
      focus:text-main_yellow
    `};
        `};
`;

function NavItems() {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    if (isMobile) {
        return (
            <Menu styles={menuStyle} right>
                <ListNavItemsContainer>
                    <NavItem menu>
                        <a href="#">Home</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Cars</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Services</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Contact</a>
                    </NavItem>
                </ListNavItemsContainer>
            </Menu>
        );
    }

    return (
        <ListNavItemsContainer>
            <NavItem>
                <a href="#">Home</a>
            </NavItem>
            <NavItem>
                <a href="#">Cars</a>
            </NavItem>
            <NavItem>
                <a href="#">Services</a>
            </NavItem>
            <NavItem>
                <a href="#">Contact</a>
            </NavItem>
        </ListNavItemsContainer>
    );
}

export default NavItems;
