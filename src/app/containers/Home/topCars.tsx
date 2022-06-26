import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";

const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pr-0
        md:pl-0
        mb-10
    `}
`;

const Title = styled.h2`
    ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
    ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;


export function TopCars() {
    return (
        <TopCarsContainer>
            <Title>Explore our best cars</Title>
            <CarsContainer>
                <Car
                    name="Corolla"
                    mileage="20,000"
                    thumbnailSrc="C:\Users\nc\Desktop\CORO-removebg-preview.png"
                    dailyPrice={70}
                    monthlyPrice={2000}
                    gearType="Automatic"
                    gas="Petrol"
                />
                <Car
                    name="Virtus"
                    mileage="36,000"
                    thumbnailSrc="../../../assets/VIRF-removebg-preview.png"
                    dailyPrice={50}
                    monthlyPrice={1300}
                    gearType="Manual"
                    gas="Petrol"
                />
                <Car
                    name="Chronos"
                    mileage="35,000"
                    thumbnailSrc="../../../assets/CROX-removebg-preview.png"
                    dailyPrice={55}
                    monthlyPrice={1500}
                    gearType="Manual"
                    gas="Petrol"
                />
            </CarsContainer>
        </TopCarsContainer>
    );
}
