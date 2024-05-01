import { Header, HeaderNav } from "./styles"
import { Link, useNavigate } from "react-router-dom"

import { MdHome } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

import { useAuth } from "../../hooks/Auth";

export const HeaderComponent = () => {
    const { signOut, user } = useAuth()

    const navigate = useNavigate()

    function exit() {
        signOut()
        navigate('/')
    }

    return (
        <Header>
            <Link to='/'>
                <MdHome />
            </Link>

            <HeaderNav>
                <Link to='/post/create'>
                    <FaPlus />
                </Link>

                <button onClick={exit}>
                    <ImExit />
                </button>

                <Link to='/profile'>
                    <img src={user.image ? user.image : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} alt={`Foto de perfil do usuario ${user.name}`} />
                </Link>
            </HeaderNav>
        </Header>
    )
}