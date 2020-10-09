import React, { Component } from 'react';
import LayoutContainer from '../layout_sections/LayoutContainer';

export default class ContentSection extends Component {
    render() {
        let propertyClasses; // This component may inherit classes from outside
        undefined === this.props.className ? 
            propertyClasses = '' :
            propertyClasses = this.props.className;
        return(
            <LayoutContainer className="Container__Blog__Content">
                <section className={"Content " + propertyClasses}>
                    { this.props.children }
                </section>
            </LayoutContainer>
        );
    };
}