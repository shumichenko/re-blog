import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = function() {
    document.title = 'Страница не найдена';
    return (
        <div>
            <h1 className="Text__Header Article__Header">Страница не найдена 404</h1>
            <h3 className="Text__Header">
                <NavLink className="Link Link__Text" exact={true} to={'/'}>
                    На главную
                </NavLink>
            </h3>
        </div>
    );
};

export default NotFound;