import { NavLink } from "react-router";
import styled from "styled-components";
import { useContext} from "react";
import { UserContext } from "../layouts/MainLayout";

const StyledMenu = styled.ul`
    display: flex;
    justify-content: center;
    gap: 5%;

    li {
        list-style-type: none;
        /* margin-right: 10px; */
    }
    a:-webkit-any-link {
        text-decoration: none;
        color: ${props => props.theme.textColor};
    }
`;

function TopMenu() {
    const { activeTheme } = useContext(UserContext);
    return (
        <StyledMenu theme={activeTheme}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/vision">Vision</NavLink></li>
        <li><NavLink to="/documentation">Documentation</NavLink></li>
        </StyledMenu>
    );
}

export default TopMenu;