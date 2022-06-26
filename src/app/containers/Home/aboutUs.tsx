import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JEEP from "../../../assets/COMP-removebg-preview.png";

const AboutUsContainer = styled.div`
    ${tw`
    flex
    w-full
    flex-wrap
    items-center
    justify-center
    pt-3
    pb-3
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
    `}
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -20px;
    img {
        width: 100%;
        height: 100%;
    }
    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height: 20em;
        width: 35em;
    }
    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
    flex
    flex-col
    md:w-1/2
    md:ml-6
    2xl:ml-16
    `}
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

const Title = styled.h1`
    ${tw`
    text-black
    text-3xl
    font-extrabold
    md:text-5xl
    md:font-black
    md:leading-normal
    `}
`;

export function AboutUs() {
    return (
      <AboutUsContainer>
        <CarContainer>
          <img src={JEEP} alt="A beautiful JEEP"/>
        </CarContainer>
        <InfoContainer>
          <Title>Feel The Best Experience With Our Rental Deals</Title>
          <InfoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </InfoText>
        </InfoContainer>
      </AboutUsContainer>
    );
  }
