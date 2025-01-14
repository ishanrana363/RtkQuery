import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import PostDetails from "../components/PostDetails";
import AddPost from "../components/AddPost";
import UpdatePost from "../components/UpdatePost";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Home></Home>
    },
    {
        path : "/post-details/:id",
        element : <PostDetails>  </PostDetails>
    },
    {
        path : "/add-post",
        element : <AddPost></AddPost>
    },
    {
        path : "/post-update/:id",
        element : <UpdatePost></UpdatePost>
    }
])