import React, { Component, Fragment } from 'react';
import Header from '../layout_sections/Header';
import Main from '../layout_sections/Main';
import Aside from '../layout_sections/Aside';
import Footer from '../layout_sections/Footer';
import ContentSection from '../layout_sections/ContentSection';
import BottomNavBar from '../interface_elements/BottomNavBar';

const BlogLayout = function(props) {
    return(
        <Fragment>
            <Header />
            <ContentSection className="Content__Blog">
                <Main className="Main__Blog">
                    { props.children }
                </Main>
                <Aside/>
            </ContentSection>
            <Footer />
            <BottomNavBar />
        </Fragment>
    );
}

export default BlogLayout;