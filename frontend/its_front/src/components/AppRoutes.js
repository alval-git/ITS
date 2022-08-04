import { Route, Routes} from "react-router-dom"
import AllPosts from "../pages/AllPosts"
import PostBySlug from "../pages/PostDetail"
import PostsByCat from "../pages/PostsByCat"
import Login from  "../pages/auth/login"
import Logout from "../pages/auth/logout";

const AppRouter = () => {

    return (
            <Routes>
                <Route path='/posts' element={<AllPosts/>} ></Route>
                <Route path='/posts/:id' element={<PostBySlug/>}></Route>
                <Route path='/posts/categories/:id' element={<PostsByCat/>}></Route>
                <Route path='/login/' element={<Login/>}></Route>
                <Route path='logout/' element={<Logout/>}></Route>
            </Routes>

    );
};

export default AppRouter;