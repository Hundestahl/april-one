import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
        ?
            <Routes>
                {/*<Route path=""                 element={<Main />}></Route>*/}
                <Route path='/about'           element={<About />} key='/about' />
                <Route exact path='/posts'     element={<Posts />} key='/posts'/>
                <Route exact path='/posts/:id' element={<PostIdPage />} key='/posts/:id' />
                {/*<Route path="/error"           element={<Error />} key='/error' />*/}
                <Route path="/*"               element={<Navigate to="/posts" replace />} key='/posts' />
            </Routes>
        :
            <Routes>
                <Route path='/login'           element={<Login />} key='/login' />
                <Route path="/*"               element={<Navigate to="/login" replace />} key='/login' />
            </Routes>

    );
};

export default AppRouter;