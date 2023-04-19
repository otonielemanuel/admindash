import styled from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai'

export const Nav = styled.nav`
    background: ${props => props.theme.colors.white};
    grid-area: nav;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  0 30px 0 30px;
    border-bottom: 1px solid lightgray;
`;

export const NavIcon = styled.div`
    display: none;

    @media only screen and (max-width: 978px) {
        display: inline;
    }
`;

export const IconMenu = styled(AiOutlineMenu)`
    font-size: 26px;
    color: ${props => props.theme.colors.black};
`;

export const NavLeft = styled.div`
    a {
        margin-right: 30px;
        text-decoration: none;
        color: ${props => props.theme.colors.black};
        font-size: 16px;
        font-weight: 500;

        &.active_link {
            color: ${props => props.theme.colors.primary};
            border-bottom: 3px solid ${props => props.theme.colors.primary};
            padding-bottom: 17px;
        }
    } 

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

export const NavRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        margin-left: 20px;
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        border-radius: 100%;
        font-size: 20px;
        padding: 7px;
    }
`;

export const Avatar = styled.img`
    border-radius: 50px;
`;

