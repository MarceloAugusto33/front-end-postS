import { Container, Main, Profile, PostsContainer, Post, PostContent } from "./styles"
import { HeaderComponent } from '../../components/Header/index'
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { useEffect, useState } from "react"


export const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const handleUser = async () => {
            try {
                const response = await api.get(`/user/${id}`);
                setUser(response.data.user)
            } catch (error) {
                console.log(error)
            }
        }

        handleUser()
    }, [])

    return (
        <Container>
            <HeaderComponent />

            <Main>
                <Profile>
                    <img src={user.image ? user.image : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} alt={`Avatar do ${user.name}`} />

                    <h2>{user.name}</h2>

                    <p>{user.about}</p>
                </Profile>

                <h3>Posts de {user.name}</h3>

                <PostsContainer>

                    {user.Post && user.Post.map((post, index) => (
                        <Post key={index}>
                            <PostContent>
                                <img src={post.image} />

                                <div>
                                    <h4>{post.title}</h4>

                                    <p>{post.about}</p>

                                    <p>{(post.created_at).split("T")[0]}</p>
                                </div>
                            </PostContent>
                        </Post>
                    ))}

                </PostsContainer>
            </Main>
        </Container>
    )
}