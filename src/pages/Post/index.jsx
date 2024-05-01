import { HeaderComponent } from "../../components/Header"
import { Container, Main, Form, InputWrapper } from "./styles"
import { Button } from '../Login/styles'
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export const Post = () => {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate()

    const handleNewPost = async (e) => {
        e.preventDefault()

        if (!title || !about || !image) return alert("Preencha todos os campos ");

        const data = { title, about, image };

        try {
            const response = await api.post('/post', data)

            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <HeaderComponent />
            <Main>
                <h2>Criar post</h2>

                <Form>
                    <InputWrapper>
                        <label htmlFor="input-title">Titulo: </label>
                        <input
                            type="text"
                            maxLength="70"
                            placeholder="70 caracteres"
                            onChange={e => setTitle(e.target.value)}
                            id="input-title"
                            required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="input-about">Descrição: </label>
                        <textarea
                            type="text"
                            maxLength="200"
                            placeholder="200 caracteres"
                            onChange={e => setAbout(e.target.value)}
                            id="input-about"
                            required
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="input-image">Imagem URL: </label>
                        <input
                            type="text"
                            maxLength="500"
                            placeholder="exemplo: https://imagem.com"
                            onChange={e => setImage(e.target.value)}
                            id="input-image"
                            required
                        />
                    </InputWrapper>

                    <Button onClick={handleNewPost}>
                        Criar
                    </Button>
                </Form>
            </Main>
        </Container>
    )
}