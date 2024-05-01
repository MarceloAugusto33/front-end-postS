import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        margin-top: 1rem;
    }
`;

export const Form = styled.form`
    width: 80%;

    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    @media (min-width: 768px) {
        max-width: 30vw;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;


    > input {
        border: none;
        background: rgb(232, 231, 231);
        padding: 1rem .5rem;
        border-radius: 8px;
        outline: none;
    }

    > textarea {
        border: none;
        background: rgb(232, 231, 231);
        resize: none;
        padding: 1rem .5rem;

        height: 150px;
        border-radius: 8px;
        outline: none;
    }
`;