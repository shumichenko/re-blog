import React, {Fragment} from 'react';

import LandingHeader from '../layout_sections/LandingHeader';
import ContentSection from '../layout_sections/ContentSection';
import Main from '../layout_sections/Main';
import Footer from '../layout_sections/Footer';
import BottomNavBar from '../interface_elements/BottomNavBar';

const LandingLayout = function(props) {
    return(
        <Fragment>
            <LandingHeader />
            <ContentSection className="Content__Landing">
                <Main>
                    { props.children }
                </Main>
            </ContentSection>
            <Footer />
            <BottomNavBar />
        </Fragment>
    );
};

export default LandingLayout;