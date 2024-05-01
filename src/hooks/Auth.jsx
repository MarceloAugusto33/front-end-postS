import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api'

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/session', { email, password })

            const { user, token } = response.data;

            localStorage.setItem("@PostS: user", JSON.stringify(user));
            localStorage.setItem("@PostS: token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
        } catch (err) {
            if (err) {
                console.log(err.response)
            }
        }
    }

    async function updateUser({ user }) {
        localStorage.setItem("@PostS: user", JSON.stringify(user));

        setData({
            user,
            token: data.token
        })
    }

    useEffect(() => {
        const user = localStorage.getItem("@PostS: user")
        const token = localStorage.getItem("@PostS: token")

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user: JSON.parse(user), token })
        }
    }, [])

    function signOut() {
        localStorage.removeItem("@PostS: user")
        localStorage.removeItem("@PostS: token")

        setData({})
    }

    return (
        <AuthContext.Provider value={{
            user: data.user,
            signIn,
            signOut,
            updateUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}


export { AuthProvider, useAuth }

