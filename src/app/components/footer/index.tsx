import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const FootContainer = styled.div`
    background-color: #1d2124;
    ${
        tw`
            flex
            flex-col
            min-w-full
            pt-10
            md:pt-16
            items-center
            justify-center
        `
    };

`;
export default function Footer() {
  return (
    <FootContainer>
        <div>
            <p>&copy; 2020 RentCar. All rights reserved.</p>
        </div>
    </FootContainer>
  )
}
