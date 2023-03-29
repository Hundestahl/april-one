import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {Navigate} from "react-router-dom";

export const routes = [
    {path: '../about', element: About, exact: false},
    {path: '../error', element: Error, exact: false},
    {path: '../posts', element: Posts, exact: true},
    {path: '../posts/:id', element: PostIdPage, exact: true},
    {path: '/*', element: <Navigate to="/error" replace />, exact: true}
]

// export const privateRoutes = [
//     {path: '/about', component: About, exact: true},
//     {path: '/posts', component: Posts, exact: true},
//     {path: '/posts/:id', component: PostIdPage, exact: true},
// ]
//
// export const publicRoutes = [
//     {path: '/login', component: Login, exact: true},
// ]