import { Outlet } from "react-router";
import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import TopMenu from "../components/TopMenu";
import BottomMenu from "../components/BottomMenu";
import GlobalStyle from "../styles/GlobalStyle";

export const UserContext = createContext();

function MainLayout() {
    const theme = {
        light: {
          name: "light",
          textColor: "black",
          backgroundColor: "white",
          divColor: "lightgray",
          linkColor: "blue"
        },
        dark: {
          name: "dark",
          textColor: "white",
          backgroundColor: "#333",
          divColor: "black",
          linkColor: "lightblue"
        }
      }
    const [activeTheme, setactiveTheme] = useState(theme.light);

    useEffect(() => {
        document.body.style.backgroundColor = activeTheme.backgroundColor;
        document.body.style.color = activeTheme.textColor;
      }, [activeTheme]);

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--medium-device);
    width: 100%;
    a {
      color: ${props => props.theme.linkColor};
    }

    /* Improves readability on smaller screens */
    padding: 5px;
    `;

    const ThemeButton = styled.button`
    display: flex;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    position: fixed;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 10px;
    border-radius: 100%;
    `;

    function ChangeThemeButton () {
        const isLightTheme = activeTheme.name === "light" ? true : false;
        return (
          <ThemeButton onClick={changeTheme}>{isLightTheme? <p>L</p> : <p>D</p>}</ThemeButton> //emoji's arent placed directly in the middle of a text area
        );
      }
    
    function changeTheme() {
        setactiveTheme((prevTheme) => (prevTheme.name === "light" ? theme.dark : theme.light));     
      }

    return (
        <UserContext.Provider value={{ activeTheme }}>
        <GlobalStyle />
        <Container theme={activeTheme}>
        <header><TopMenu /></header>
        <ChangeThemeButton />
        <main>
        <Outlet />
        </main>
        <footer><BottomMenu /></footer>
        </Container>
        </UserContext.Provider>
    );
}

export default MainLayout;