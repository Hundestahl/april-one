import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter, Link, Navigate, Route, Router, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AxiosError} from "axios";
import {AuthContext} from "./context";
function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        } else setIsAuth(false)
        setLoading(false);
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;




// const [value, setValue] = useState("Какой-то текст")

{/*  <Counter/>*/}
{/*  <ClassCounter/>*/}
{/*<h1>{value}</h1>*/}
{/*<input*/}
{/*    type="text"*/}
{/*    value={value}*/}
{/*    onChange={event => setValue(event.target.value)}*/}
{/*/>*/}

// {id: 1, title: 'Пост сдал, пост принял', body: 'Однажды, в студенную зимнюю пору'},
// {id: 2, title: 'Я пост', body: 'Говорю и показываю'},
// {id: 3, title: 'Арлекино', body: 'Яхты, самолёты'},