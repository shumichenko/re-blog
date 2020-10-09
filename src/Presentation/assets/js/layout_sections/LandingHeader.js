import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import LayoutContainer from './LayoutContainer';
import FullLogo from '../interface_elements/FullLogo';

const LandingHeader = function() {
    let lastScrollPosition = 0;
    const SHOW_TRIGGER = 10;
    const HIDE_TRIGGER = 300;
    
    const modifyHeader = function(header, paddingTop, pixelsToTop) {
        let scrollPosition = window.scrollY;
        
        if (paddingTop - SHOW_TRIGGER > scrollPosition)
            header.classList.remove('Header__Landing__Fixed'); 
        else if (paddingTop - SHOW_TRIGGER < scrollPosition)
            header.classList.add('Header__Landing__Fixed');
        
        if (pixelsToTop + HIDE_TRIGGER >= scrollPosition)
            header.classList.remove('Header__Transition');
        else if (pixelsToTop + HIDE_TRIGGER < scrollPosition)
            header.classList.add('Header__Transition');
        
        if (pixelsToTop + HIDE_TRIGGER <= scrollPosition && lastScrollPosition < scrollPosition)
            header.classList.add('Header__Landing__Hidden');
        else
            header.classList.remove('Header__Landing__Hidden');
        
        lastScrollPosition = scrollPosition;
    };

    useEffect(() => {
        let header = document.getElementById('LandingHeader');
        let marginTop = parseInt(window.getComputedStyle(header,null).getPropertyValue("margin-top"));
        let paddingTop = parseInt(
            window.getComputedStyle(header,null).getPropertyValue("padding-top")
        ) + marginTop;
        if (paddingTop <= 0)
            paddingTop = 11;
        let pixelsToTop = (header.offsetTop > 0 ?? 0) + paddingTop;

        window.addEventListener('scroll', () => {modifyHeader(header, paddingTop, pixelsToTop)});
        return function cleanup() {
            window.removeEventListener("scroll", modifyHeader);
        };
    });

    return(
        <header id="LandingHeader" className="Header__Landing">
            <LayoutContainer className="Container__Mobile Container__Blog__Landing">
                <FullLogo />
                <div className="Header__Landing__Navigation Hide__OnMedAndDown">
                    <p className="Text__Link Text__Link__Page">
                        <NavLink className="Link Link__Text" exact={true} to="/articles">Блог</NavLink>
                    </p>
                    <p className="Text__Link Text__Link__Page">
                        <NavLink className="Link Link__Text" exact={true} to="/projects">Портфолио</NavLink>
                    </p>
                </div>
            </LayoutContainer>
        </header>
    );
};

export default LandingHeader;