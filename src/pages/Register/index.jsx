import { Link, useNavigate } from "react-router-dom";
import { Container, Form, InputWrapper, Input, Button } from "./styles";
import { MdOutlineEmail, MdVpnKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { api } from '../../services/api'
import { useAuth } from "../../hooks/Auth";
import { LuBadgeCheck } from "react-icons/lu";

export const Register = () => {
    const { signIn } = useAuth()

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) return alert("Preencha todos os campos")

        const data = {
            username,
            name,
            email,
            password
        }

        try {
            const response = await api.post('/user', data)
            await signIn({ email, password })
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <h1>PostS</h1>
            <h2>Criar conta</h2>
            <Form>
                <InputWrapper>
                    <label htmlFor="input-username">Username:</label>
                    <Input>
                        <label htmlFor="input-username">
                            <LuBadgeCheck />
                        </label>

                        <input
                            type="text"
                            placeholder="Digite seu username"
                            id="input-username"
                            onChange={e => setUsername(e.target.value)}
                            name="register-input-username"
                        />
                    </Input>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="input-nome">Nome:</label>
                    <Input>
                        <label htmlFor="input-nome">
                            <FaUser />
                        </label>

                        <input
                            type="text"
                            autoComplete="name"
                            placeholder="Digite seu nome"
                            id="input-nome"
                            onChange={e => setName(e.target.value)}
                            name="register-input-name"
                        />
                    </Input>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="input-email">Email:</label>
                    <Input>
                        <label htmlFor="input-email">
                            <MdOutlineEmail />
                        </label>

                        <input
                            type="email"
                            autoComplete="email"
                            placeholder="Digite seu email"
                            id="input-email"
                            onChange={e => setEmail(e.target.value)}
                            name="register-input-email"
                        />
                    </Input>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="input-senha">Senha:</label>
                    <Input>
                        <label htmlFor="input-senha">
                            <MdVpnKey />
                        </label>

                        <input
                            type="password"
                            autoComplete="current-password"
                            placeholder="Digite seu senha"
                            id="input-senha"
                            onChange={e => setPassword(e.target.value)}
                            name="register-input-password"
                        />
                    </Input>
                </InputWrapper>

                <Button onClick={handleRegister}>
                    Criar
                </Button>
            </Form>

            <p>Já tem conta? <Link to='/'>Entrar</Link></p>
        </Container>
    )
}