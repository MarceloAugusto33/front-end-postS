import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`;


export const Main = styled.main`
    display: flex;
    flex-direction: column;

    overflow: auto;

    gap: 1rem;

    padding: 1rem ;

    > h2 {
        font-weight: 700;
        margin: 1rem 0;
    }

    padding-bottom: 2rem;
`;

export const InputSearch = styled.div`
    display: flex;
    align-items: center;

    background: rgb(232, 231, 231);
    border-radius: 8px;
    gap: .5em;

    svg {
        font-size: 25px;

        transition: all .4s;

        &:hover{
            filter: brightness(0.7);
        }
        margin-left: .5rem;
    }

    > input {
        border: none;
        background: none;
        flex: 1;
        font-size: 18px;
        outline: none;
        padding: 1rem;
    }
`;

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Post = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid rgba(0, 0, 0, 0.169);
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.169);
    overflow: hidden;


    a {
        text-decoration: none;
        color: black;
    }

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 1rem;

    > img {
        max-height: 40vh;
        object-fit: cover;

        @media (min-width: 768px) {
            height: 300px;
        }
    }

    > div {
        padding: 0 .5rem;
    }

`;

export const PostUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem .5rem 0;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .5rem 0;
    border-radius: 8px;
    padding-right: .5rem;


    > img {
        width: 30px;
        height: 30px;

        object-fit: cover;
        border-radius: 50%;
    }

    transition: all .4s;
    &:hover{
        background: rgb(232, 231, 231);
    }
`;