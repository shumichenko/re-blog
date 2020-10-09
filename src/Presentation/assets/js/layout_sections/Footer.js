import React, {Component} from 'react';

import FullLogo from '../interface_elements/FullLogo';
import LayoutContainer from './LayoutContainer';

export default class Footer extends Component {
    render() {
        return(
            <footer className="Footer__Blog Hide__OnMedAndDown">
                <LayoutContainer className="Container__Blog__Footer">
                    <FullLogo />
                    <div className="Footer__Blog__Social">
                        <p className="Text__Link Text__Link__Page">
                            <a className="Link Link__Text" href="https://github.com/shumichenko">github</a>
                        </p>
                        <p className="Text__Link Text__Link__Page">
                            <a className="Link Link__Text" href="https://instagram.com/shumichenko">instagram</a>
                        </p>
                        <p className="Text__Link Text__Link__Page">
                            <a className="Link Link__Text" href="https://vk.com/shumichenko">vkontakte</a>
                        </p>
                    </div>
                </LayoutContainer>
            </footer>
        );
    }
}