import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class FullLogo extends Component {
    render() {
        let propertyClasses; // This component may inherit classes from outside
        undefined === this.props.className ? 
            propertyClasses = '' :
            propertyClasses = this.props.className;
        return(
            <div className={ "Logo__Full " + propertyClasses }>
                <NavLink exact={true} to="/" className="Link__Logo" />
            </div>
        );
    };
}