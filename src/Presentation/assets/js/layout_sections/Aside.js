import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Aside extends Component {
    render() {
        return(
            <aside className="Aside__Blog Hide__OnMedAndDown">
                <p className="Text__Link Text__Link__Page Link__Text__Vertical">
                    <NavLink className="Link Link__Text" activeClassName="Link__Text__Active" exact={false} to="/articles">
                        Блог
                    </NavLink>
                </p>
                <p className="Text__Link Text__Link__Page Link__Text__Vertical">
                    <NavLink className="Link Link__Text" activeClassName="Link__Text__Active" exact={false} to="/about">
                        Обо мне
                    </NavLink>
                </p>
                <p className="Text__Link Text__Link__Page Link__Text__Vertical">
                    <NavLink className="Link Link__Text" activeClassName="Link__Text__Active" exact={false} to="/projects">
                        Портфолио
                    </NavLink>
                </p>
            </aside>
        );
    };
}