import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    overflow: auto;
    padding-bottom: 2rem;

    &::before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        background: rgb(232, 232, 232);
        height: 200px;
        width: 100%;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);

        z-index: -1;
    }

    & > a {
        text-decoration: none;

        background: orange;
        color: white;
        margin: 0 .5rem 1rem;
        padding: 1rem;
        border-radius: 8px;

        transition: all .4s;

        text-align: center;

        &:hover{
            filter: brightness(0.7);
        }
    }

    h3 {
        padding: 0 1rem;
        margin: 1rem 0;
    }
`;

export const ContainerProfile = styled.div`
    padding: 0 1rem;

    margin: 6.5rem 0 4rem;

    > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;

        object-fit: cover;

        display: block;
        margin: 0 auto;
    }

    > h2 {
        margin: 1rem 0;
        text-align: center;
    }

    p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        margin:  0 auto;
    }
`;

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 0 1rem;

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

    > div {
        display: flex;
        & > a , & > button {
            height: 40px;
            flex: 1 0 auto;
            color: white;
            border: none;
            cursor: pointer;
            transition: all .4s;
            font-size: 16px;
            &:hover {
                filter: brightness(0.7);
            }
        }

        a {
            background: orange;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        > button {
        background: red;
        }
    }


`;

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 1rem;

    > img {
        width: 100%;
        max-height: 40vh;
        object-fit: cover;

        @media (min-width: 768px) {
            height: 300px;
        }
    }

    > div {
        padding: 0 .5rem .5rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
