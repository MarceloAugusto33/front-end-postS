import { useState } from "react";
import { Container, Form, InputWrapper, Input, Button } from "./styles";
import { MdOutlineEmail, MdVpnKey } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { api } from "../../services/api";
import { useAuth } from '../../hooks/Auth'

export const Login = () => {
    const { signIn } = useAuth()
    const [viewPassword, setViewPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email || !password) return alert("Preencha todos os campos");

        signIn({ email, password })
    }

    return (
        <Container>
            <h1>PostS</h1>

            <h2>Login</h2>

            <Form>

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
                            name="login-input-email"
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
                            type={viewPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Digite seu senha"
                            id="input-senha"
                            onChange={e => setPassword(e.target.value)}
                            name="login-input-password"
                        />

                        <button type="button" onClick={() => setViewPassword(!viewPassword)}>
                            <FaEye />
                        </button>
                    </Input>
                </InputWrapper>

                <Button onClick={handleLogin}>
                    Entrar
                </Button>
            </Form>

            <p>Não tem conta? <Link to='/register'>Criar conta</Link> </p>
        </Container>
    )
}