import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import FirstButton from "../button/FirstButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <FirstButton onClick={logout}>
                Выйти
            </FirstButton>
            <div className="navbar__links">
                <Link to="/">Главная</Link>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Публикации</Link>
            </div>
        </div>
    );
};

export default Navbar;