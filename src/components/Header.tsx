import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/active-sprint">Активный Спринт</Link></li>
                    <li><Link to="/admin">Панель Администратора</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
