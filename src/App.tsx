import React from "react";
import "./App.css";
import tw from "twin.macro";
import styles from "styled-components";
import { HomePage } from "./app/containers/Home";

const AppContainer = styles.div`
  ${tw`
     flex
     flex-col
     w-full
     h-full
     `}
`;

function App() {
    return (
        <AppContainer>
            <HomePage />
        </AppContainer>
    );
}

export default App;
