import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
    className?: string;
}

const BaseButton = styled.button`
    ${tw`
        pl-5
        pr-5
        pt-2
        pb-2
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
    `};
`;

const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-button_blue
        hover:bg-transparent
        hover:text-button_blue
        hover:border-button_blue
    `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-button_blue
    text-button_blue
    bg-transparent
    hover:bg-button_blue
    hover:text-white
    hover:border-transparent
  `};
`;




export function Button(props: IButtonProps) {
    const {theme, text, className} = props;

    if (theme === "filled") {
        return (
            <FilledButton className={className}>
                {text}
            </FilledButton>
        );
    }else {
        return (
            <OutlinedButton className={className}>
                {text}
            </OutlinedButton>
        );
    }

}