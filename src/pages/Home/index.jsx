import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Container, Main, InputSearch, PostsContainer, Post, PostContent, PostUser, UserContainer } from "./styles"
import { useEffect, useState } from "react";
import { HeaderComponent } from "../../components/Header";
import { api } from "../../services/api";


export const Home = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        const handlePosts = async () => {
            try {
                const response = await api.get('/post');

                setPosts(response.data.posts)
            } catch (err) {
                console.log(err)
            }
        }

        handlePosts()
    }, []);

    const filterPosts = search.length !== 0 ? posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())) : posts 

    return (
        <Container>
            <HeaderComponent />
            <Main>
                <h2>Explorar</h2>

                <InputSearch>
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Busque um post"
                        onChange={e => setSearch(e.target.value)}
                        id="input-search"
                        name="home-input-search"
                    />
                </InputSearch>

                <PostsContainer>
                    {filterPosts.length == 0 && (
                        <p>Não há posts</p>
                    )}

                    {filterPosts && filterPosts.map((post, index) => (
                        <Post key={index}>
                            <PostContent>
                                <img src={post.image} />
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.about}</p>
                                </div>
                            </PostContent>

                            <PostUser>
                                <Link to={`/user/${post.author.username}`}>
                                    <UserContainer>
                                        <img src={post.author.image ? post.author.image : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"} alt={`Avatar do ${post.author.name}`} />

                                        <p>{post.author.username}</p>
                                    </UserContainer>
                                </Link>
                                <p>{(post.created_at).split("T")[0]}</p>
                            </PostUser>
                        </Post>
                    ))}
                </PostsContainer>

            </Main>

        </Container>
    )
}