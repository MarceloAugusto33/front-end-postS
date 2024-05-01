import { useState } from "react";
import { Button } from '../Login/styles';
import { useAuth } from "../../hooks/Auth";
import { HeaderComponent } from "../../components/Header";
import { Container, Main, Form, InputWrapper } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const ProfileEdit = () => {
    const { user, updateUser } = useAuth()

    const [name, setName] = useState(user.name);
    const [about, setAbout] = useState(user.about);
    const [image, setImage] = useState(user.image);
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEditUser = async (e) => {
        e.preventDefault()
        if (!password) return alert("Preencha a senha");

        const data = {
            name,
            about,
            image,
            password
        }

        try {
            const response = await api.put('/user', data)
            updateUser({ user: response.data.user })

            navigate('/profile')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container>
            <HeaderComponent />
            <Main>
                <h2>Editar Usuario</h2>

                <Form>
                    <InputWrapper>
                        <label htmlFor="input-name">nome: </label>
                        <input
                            type="text"
                            maxLength="70"
                            placeholder="70 caracteres"
                            autoComplete="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            id="input-name"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="input-about">Sobre: </label>
                        <textarea
                            type="text"
                            maxLength="200"
                            placeholder="200 caracteres"
                            onChange={e => setAbout(e.target.value)}
                            id="input-about"
                            value={about ? about : ""}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="input-image">Avatar URL: </label>
                        <input
                            type="text"
                            maxLength="500"
                            placeholder="exemplo: https://avatar.com"
                            onChange={e => setImage(e.target.value)}
                            id="input-image"
                            value={image ? image : ""}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="input-password">Senha(obrigatorio): </label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={e => setPassword(e.target.value)}
                            required
                            id="input-password"
                        />
                    </InputWrapper>

                    <Button onClick={handleEditUser}>
                        Salvar
                    </Button>
                </Form>
            </Main>
        </Container>
    )
}