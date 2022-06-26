import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pl-2
    pr-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `}
`;

const ItemContainer = styled.div`
    ${tw`
    flex
    relative
    `}
`;

const Icon = styled.span`
    ${tw`
    text-button_blue
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-2
    `}
`;
// go to https://github.com/ipenywis/react-nestjs-full-web-app/blob/master/react-cars-app/src/app/components/bookCard/index.tsx and see how to use styled-components for Name

const Name = styled.span`
    ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
    `}
`;

const LineSeparator = styled.div`
    width: 2px;
    height: 40%;
    ${tw`
      bg-gray-300
      mr-2
      ml-2
      md:mr-5
      md:ml-5
    `}
`;

const DateCalendar = styled(Calendar)`
    position: absolute;
    top: 2em;
    left: 0;
    user-select: none;
    max-width: none;
    ${({ offset }: any) =>
        offset &&
        css`
            left: -6.5em;
        `};
    @media (min-width: ${SCREENS.md}) {
        top: 3.5em;
        left: -2em;
    }
` as any;

const SmallIconToShowIfDateCalendarIsOpen = styled.span`
    ${tw`
        text-gray-500
        fill-current
        text-xs
        ml-1
        md:text-base
        `}
`;

export const BookCard = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [startIsOpen, setStartIsOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if (startIsOpen) setStartIsOpen(false);
    };

    const toggleStartDateCalendar = () => {
        if (startIsOpen) {
            setStartIsOpen(false);
        } else {
            setStartIsOpen(true);
        }
        if (isReturnCalendarOpen) setReturnCalendarOpen(false);
    };

    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
                <SmallIconToShowIfDateCalendarIsOpen>
                    <FontAwesomeIcon
                        icon={startIsOpen ? faCaretUp : faCaretDown}
                    />
                </SmallIconToShowIfDateCalendarIsOpen>
                {startIsOpen && (
                    <DateCalendar
                        value={startDate}
                        onChange={setStartDate as any}
                    />
                )}
            </ItemContainer>
            <LineSeparator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
                <SmallIconToShowIfDateCalendarIsOpen>
                    <FontAwesomeIcon
                        icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
                    />
                </SmallIconToShowIfDateCalendarIsOpen>
                {isReturnCalendarOpen && (
                    <DateCalendar
                        offset
                        value={returnDate}
                        onChange={setReturnDate as any}
                    />
                )}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em"></Marginer>
            <Button text="Book Your Ride" />
        </CardContainer>
    );
};
