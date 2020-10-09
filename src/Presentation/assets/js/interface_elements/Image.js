import React from 'react';

const Image = function(props) {
    const handleError = function(event) {
        event.target.remove();
    };

    return (
        <img src={props.imageName} onError={handleError} className="Image__Responsive" />
    );
};

export default Image;