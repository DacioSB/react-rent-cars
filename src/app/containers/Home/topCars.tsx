import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car-type";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

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

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;
export function TopCars() {
  const [current, setCurrent] = useState(0);
  const testCar: ICar = {
    name: "Corolla",
    mileage: "20,000",
    thumbnailSrc:
      "https://github.com/DacioSB/rent-cars/blob/main/src/assets/CORO-removebg-preview.png?raw=true",
    dailyPrice: 70,
    monthlyPrice: 2000,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "Virtus",
    mileage: "36,000",
    thumbnailSrc:
      "https://github.com/DacioSB/rent-cars/blob/main/src/assets/VIRF-removebg-preview.png?raw=true",
    dailyPrice: 50,
    monthlyPrice: 1300,
    gearType: "Manual",
    gas: "Petrol",
  };
  const testCar3: ICar = {
    name: "Chronos",
    mileage: "35,000",
    thumbnailSrc:
      "https://github.com/DacioSB/rent-cars/blob/main/src/assets/CROX-removebg-preview.png?raw=true",
    dailyPrice: 55,
    monthlyPrice: 1500,
    gearType: "Manual",
    gas: "Petrol",
  };

  const cars = [testCar, testCar2, testCar3, testCar2];
  const carsReact = (cars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailSrc} />));
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberOfDots = isMobile ? carsReact.length : Math.ceil(carsReact.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={carsReact}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
    </TopCarsContainer>
    );
}
