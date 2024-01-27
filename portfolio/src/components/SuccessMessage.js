import React from 'react';
import './style.css';

function SuccessMessage(props) {
    return (
        <div className="success-message" style={{"display": props.successClass}}>
            <div className="message-content">
                <span className="message">Sorry the backend is not connected :(</span>
                {/* <i className="ri-close-line close-icon"></i> */}
            </div>
        </div>

    )
}

export default SuccessMessage
