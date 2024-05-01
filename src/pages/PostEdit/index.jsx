import { HeaderComponent } from "../../components/Header"
import { Container, Main, Form, InputWrapper } from "./styles"
import { Button } from '../Login/styles'
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export const PostEdit = () => {
    const id = new URLSearchParams(window.location.search).get('id')
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const handleDataPost = async () => {
            try {
                const response = await api.get(`/post/${id}`)
                setTitle(response.data.post.title)
                setAbout(response.data.post.about)
                return setImage(response.data.post.image)
            } catch (error) {
                console.log(error)
            }
        }

        handleDataPost()
    }, [])



    const navigate = useNavigate()

    const handleEditPost = async (e) => {
        e.preventDefault()

        if (!title || !about || !image) return alert("Preencha todos os campos ");

        const data = {
            title,
            about,
            image
        };

        try {
            await api.put(`/post/${id}`, data)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <HeaderComponent />
            <Main>
                <h2>Editar post</h2>

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
                            value={title}
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
                            value={about}
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
                            value={image}
                        />
                    </InputWrapper>

                    <Button onClick={handleEditPost}>
                        Salvar
                    </Button>
                </Form>
            </Main>
        </Container>
    )
}