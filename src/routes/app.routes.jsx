import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Post } from "../pages/Post"
import { User } from "../pages/User"
import { Profile } from "../pages/Profile"
import { ProfileEdit } from "../pages/ProfileEdit"
import { PostEdit } from "../pages/PostEdit"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/create" element={<Post />} />
            <Route path="/post/edit" element={<PostEdit />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/update" element={<ProfileEdit />} />
        </Routes>
    )
}