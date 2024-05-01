import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;

    h1 {
        color: orange;
        margin-bottom: 1em;
    }

    > p {
        margin: 1em 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 80%;

    @media (min-width: 768px) {
        max-width: 30vw;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: .5rem;

    background: rgb(232, 231, 231);
    border-radius: 5px;

    overflow: hidden;

    > label {
        display: flex;
        align-items: center;
        margin-left: .3em;
    }

    svg {
        font-size: 25px;
    }

    > input {
        font-size: 18px;
        border: none;
        background: none;
        outline: none;
        padding: .5em .2em;

        flex: 1;
    }
`

export const Button = styled.button`
    border: none;
    background: orange;

    color: white;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    transition: all .4s;
    cursor: pointer;

    &:hover{
        filter: brightness(0.7);
    }
`