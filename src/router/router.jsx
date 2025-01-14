import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import PostDetails from "../components/PostDetails";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Home></Home>
    },
    {
        path : "/post-details/:id",
        element : <PostDetails>  </PostDetails>
    }
])