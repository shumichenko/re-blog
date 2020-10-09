import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Routing } from '../config/Routing';
import ArrowBackIcon from '../../images/icon/ArrowBack.svg';

export const HistoryBackButton = function() {
    const location = useLocation();
    const history = useHistory();
    const locationParts = location.pathname.split('/').slice(1);
    const rootLocation = locationParts[0] ?? '';
    const inheritedLocation = locationParts[1] ?? '';

    const routes = Object.values(Routing);
    let pathToRedirect = routes.find(
        route => route.path.split('/')[1] === rootLocation  
    );    
    pathToRedirect = pathToRedirect ? 
        pathToRedirect.path.split('/')[1] : '';
    
    const handleClick = function() {
        history.push('/' + pathToRedirect);
    };
   
    return(
        inheritedLocation || !pathToRedirect ? (
            <a className="Header__Blog__Link__Icon Link__Icon__Active Show__OnMedAndDown" onClick={ handleClick }>
                <svg>
                    <use xlinkHref={ArrowBackIcon+'#ArrowBack'} />
                </svg>
            </a>
        ) : ''
    );
}