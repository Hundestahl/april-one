import React, {useContext} from 'react';
import FirstInput from "../components/UI/input/FirstInput";
import FirstButton from "../components/UI/button/FirstButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h2>Авторизуйтесь, чтобы войти</h2>
            <form onSubmit={login}>
                <FirstInput type="text" placeholder="Введите логин"/>
                <FirstInput type="password" placeholder="Введите пароль"/>
                <FirstButton>Войти</FirstButton>
            </form>
        </div>
    );
};

export default Login;