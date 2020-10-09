import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import FeedIcon from '../../images/icon/Feed.svg';
import AboutIcon from '../../images/icon/About.svg';
import PortfolioIcon from '../../images/icon/Portfolio.svg';

export default class BottomNavBar extends Component {
    render() {
        return(
            <div className="BottomNavBar Show__OnMedAndDown">
                <div className="BottomNavBar__Wrapper">
                    <NavLink exact={false} to="/articles" className="BottomNavBar__Link" activeClassName="Link__Icon__Active">
                        <svg>
                            <use xlinkHref={FeedIcon+'#Feed'} />
                        </svg>
                    </NavLink>
                    <NavLink exact={false} to="/about" className="BottomNavBar__Link" activeClassName="Link__Icon__Active">
                        <svg>
                            <use xlinkHref={AboutIcon+'#About'} />
                        </svg>
                    </NavLink>
                    <NavLink exact={false} to="/projects" className="BottomNavBar__Link" activeClassName="Link__Icon__Active">
                        <svg>
                            <use xlinkHref={PortfolioIcon+'#Portfolio'} />
                        </svg>
                    </NavLink>
                </div>
            </div>
        );
    };
}