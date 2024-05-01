import { Container, Main, ContainerProfile, PostsContainer, Post, PostContent } from "./styles"
import { HeaderComponent } from '../../components/Header/index'
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/Auth"
import { useEffect, useState } from "react"


export const Profile = () => {
    const { user } = useAuth()

    const [userApi, setUserApi] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const handleUser = async () => {
            try {
                const response = await api.get(`/user/${user.username}`);
                setUserApi(response.data.user)
            } catch (error) {
                console.log(error)
            }
        }
        handleUser()
    }, [])

    const handleDeletePost = async (id) => {
        try {
            const response = await api.delete(`/post/${id}`)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container>
            <HeaderComponent />

            <Main>
                <ContainerProfile>
                    <img
                        src={userApi.image ? userApi.image : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} alt={`Avatar do ${user.username}`} />

                    <h2>{userApi.username}</h2>

                    <p>{userApi.about}</p>
                </ContainerProfile>

                <Link to='/profile/update'>
                    Editar perfil
                </Link>


                <h3>Seus posts</h3>

                <PostsContainer>
                    {userApi.Post && userApi.Post.map((post, index) => (
                        <Post key={index}>
                            <PostContent>
                                <img src={post.image} />

                                <div>
                                    <h4>{post.title}</h4>

                                    <p>{post.about}</p>

                                    <p>{(post.created_at).split("T")[0]}</p>
                                </div>
                            </PostContent>

                            <div>
                                <Link to={`/post/edit?id=${post.id}`}>
                                    Editar Post
                                </Link>

                                <button onClick={() => handleDeletePost(post.id)}>
                                    Deletar Post
                                </button>
                            </div>
                        </Post>
                    ))}

                </PostsContainer>
            </Main>
        </Container>
    )
}