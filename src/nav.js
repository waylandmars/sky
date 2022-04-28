import React from "react";

import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import exitIcon from './exit.svg';

const Navigation = () => {
  return (
    <div className="navigationBar">
        <img src={logo} className="logoNavigation" alt="logo" />
        <nav className="navigationList">
            <Link to="/" className="navLink" tabIndex="0">Мои файлы</Link>
            <Link to="/shared" className="navLink" tabIndex="1">Файлы, доступные мне</Link>
            <Link to="/allfiles" className="navLink" tabIndex="2">Список общедоступных файлов</Link>
            <Link to="/password" className="navLink" tabIndex="3">Сменить пароль</Link>
            <Link to="" className="navLink" tabIndex="4"><img src={exitIcon} className="icon" alt="logo" /> Выйти</Link>
        </nav>
        <div className="progressBar">
         <ProgressBar now={60} />
         <p>Свободно 11.4 ГБ</p>
        </div>
    </div>
  );
};

export default Navigation;
