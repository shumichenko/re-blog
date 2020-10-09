import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        let propertyClasses; // This component may inherit classes from outside
        undefined === this.props.className ? 
            propertyClasses = '' :
            propertyClasses = this.props.className;
        return(
            <main className={"Main Container__Mobile " + propertyClasses}> 
                { this.props.children }
            </main>
        );
    };
}