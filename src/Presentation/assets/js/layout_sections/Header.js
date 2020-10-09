import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';

import FullLogo from '../interface_elements/FullLogo';
import LayoutContainer from './LayoutContainer';
import { HistoryBackButton } from '../interface_elements/HistoryBackButton';
import { RouteLabel } from '../interface_elements/RouteLabel';
import { ArticleSearchBar } from '../interface_elements/ArticleSearchBar';

const Header = function() {
    let lastScrollPosition = 0;
    let scrollFlag = 0;
    const location = useLocation();
    let dividerClassName = (location.pathname === '/articles') ? '' : 'Header__Blog__Divider';
  
    const modifyHeader = function() {
        let scrollPosition = window.scrollY;
        let header = document.getElementById('BlogHeader');
        const headerContainer = header.children[0];
        
        if (20 > scrollPosition) {
            header.classList.remove('Header__Blog__Fixed');
            addDivider(headerContainer);
        }
        else {
            header.classList.add('Header__Blog__Fixed');
            headerContainer.classList.remove('Header__Blog__Divider');
        }
        if (lastScrollPosition < scrollPosition) {
            if ((Math.abs(scrollFlag - lastScrollPosition)) > 150) {
                scrollFlag = lastScrollPosition;
                header.classList.add('Header__Blog__Hidden');
            }
        }
        else {
            header.classList.remove('Header__Blog__Hidden');
            scrollFlag = lastScrollPosition;
        }
        lastScrollPosition = scrollPosition;
    };

    const addDivider = function(headerContainer) {
        (location.pathname === '/articles') ||
            headerContainer.classList.add('Header__Blog__Divider');
    }

    useEffect(() => {
        window.addEventListener('scroll', modifyHeader);
        return function cleanup() {
            window.removeEventListener("scroll", modifyHeader);
        };
    });
 
    return(
        <header id="BlogHeader" className="Header__Blog">
            <LayoutContainer className={"Container__Blog__Header " + dividerClassName}>
                <HistoryBackButton />
                <FullLogo className="Hide__OnMedAndDown" />
                <RouteLabel />
                <div className="Header__SearchBar Hide__OnMedAndDown">
                    <ArticleSearchBar />
                </div>
            </LayoutContainer>
        </header>
    );
   
}
export default Header;