import styled from "styled-components";

export const Header = styled.header`
    background: orange;
    padding: 1rem 2rem;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: white;
    }

    svg {
        font-size: 30px;

        transition: all .4s;

        &:hover{
            filter: brightness(0.7);
        }
    }
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    img {
        width: 50px;
        height: 50px;

        object-fit: cover;
        border-radius: 50%;

        transition: all .4s;

        &:hover{
            filter: brightness(0.7);
        }
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        background: none;
        border: none;

        cursor: pointer;

        color: white;
    }
`;