import styled from "styled-components";
import { GrFormClose } from 'react-icons/gr'

export const IdSidebar = styled.div`
    position: fixed;
    background: #020509;
    height: 100vh;
    grid-area: sidebar;
    overflow-y: auto;
    padding: 20px;
    transition: all 0.5s;
    overflow: hidden;

    &.sidebar-responsive {
        display: inline !important;
        z-index: 999999 !important;
        position: absolute;
        left: 0 !important;
    }

    @media only screen and (max-width: 975px) {
        display: none;
    }
`;

export const TitleSidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #f3f4f6;
    margin-bottom: 30px;
    align-items: baseline;
    width: 100%;
`;

export const ImageSidebar = styled.div`
    display: flex;
    align-items: center;
`;

export const ImgLogo = styled.img`
    height: 35px;
    object-fit: cover;
`;

export const H1 = styled.h1`
    font-size: 18px;
    display: inline;
    margin-left: 10px;
    margin-top: 1px;
`;

export const CloseIcon = styled(GrFormClose)`
    font-size: 18px;
    visibility: hidden;

    @media only screen and (max-width: 975px) {
        visibility: visible;
    }
`;

export const H2 = styled.h2`
    color: ${props => props.theme.colors.primary};
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 3px;
    font-weight: 700;
    margin-left: 10px;
`;

export const MenuSidebar = styled.div`
    width: 100%;
`;

export const LinkSidebar = styled.div`
    color: ${props => props.theme.colors.white};
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
    font-weight: 500;
    display: flex;
    align-items: center;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    a {
        &.active_menu_link {
            color: ${props => props.theme.colors.primary};
        } 
        
        &:hover {
        color: ${props => props.theme.colors.primary};
        }
    }

    &.active_menu_link {
        margin-top: 10px;
        width: 100%;
        color: ${props => props.theme.colors.primary};
        background-color: #0088ff3b;
    }
`;

export const ALink = styled.a`
    text-decoration: none;
    margin-left: 10px;
    color: ${props => props.theme.colors.white};

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`;