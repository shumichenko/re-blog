import React, { Component } from 'react';

export default class LayoutContainer extends Component {
    render() {
        let propertyClasses; // This component may inherit classes from outside
        undefined === this.props.className ? 
            propertyClasses = '' :
            propertyClasses = this.props.className;

        return(
            <div className={ "Container__Blog " + propertyClasses }> 
                { this.props.children }
            </div>
        );
    };
}