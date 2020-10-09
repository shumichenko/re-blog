import React, { useEffect } from 'react';

import FullLogo from '../interface_elements/FullLogo';
import LayoutContainer from './LayoutContainer';
import { HistoryBackButton } from '../interface_elements/HistoryBackButton';
import { RouteLabel } from '../interface_elements/RouteLabel';
import { ArticleSearchBar } from '../interface_elements/ArticleSearchBar';

const Header = function() {
    let lastScrollPosition = 0;
  
    const modifyHeader = function() {
        let scrollPosition = window.scrollY;
        
        let header = document.getElementById('BlogHeader');
        if (20 > scrollPosition)
            header.classList.remove('Header__Blog__Fixed');
        else 
            header.classList.add('Header__Blog__Fixed');
        if (lastScrollPosition < scrollPosition)
            header.classList.add('Header__Blog__Hidden');
        else
            header.classList.remove('Header__Blog__Hidden');

        lastScrollPosition = scrollPosition;
    };

    useEffect(() => {
        window.addEventListener('scroll', modifyHeader);
        return function cleanup() {
            window.removeEventListener("scroll", modifyHeader);
        };
    });
 
    return(
        <header id="BlogHeader" className="Header__Blog">
            <LayoutContainer className="Container__Blog__Header">
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