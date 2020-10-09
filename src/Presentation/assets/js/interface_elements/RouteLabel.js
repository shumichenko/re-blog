import React from 'react';
import { useLocation } from 'react-router-dom';

import { Routing } from '../config/Routing';

export const RouteLabel = function() {
    const location = useLocation();
    const locationParts = location.pathname.split('/').slice(1); // slice() removes empty value caused by splitting
    const routes = Object.values(Routing); 
    
    let matchedPath = routes.find(
        function(route) {
            let pathParts = route.path.split('/').slice(1);
            let locationsQuantity = locationParts.length;
            let matchesQuantity = 0;

            for (let iteration = 0; iteration < locationsQuantity; iteration += 1) {
                if (pathParts[iteration] && (
                        locationParts[iteration] === pathParts[iteration] || 
                        0 <= pathParts[iteration].indexOf(':')
                    )
                )
                    matchesQuantity += 1;
            } 
            return locationsQuantity === matchesQuantity ? route : undefined;
        }
    );
    const pathLabel = undefined === matchedPath ? '' : matchedPath.name;
    
    return (
        <div className="Header__Blog__Label Show__OnMedAndDown">
            <h3 className="Text__Header">
                {pathLabel} 
            </h3>
        </div>
    );
};