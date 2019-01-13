import React from 'react';

const Alert = props => (
    <div className={`alert ${props.isWarning? 'warn': 'success'}`}>
        <div className="alert__logo">
            {
                props.isWarning
                ? (<span className="alert__logo-wrapper"><i className="fi fi-alert large"></i></span>)
                : (<span className="alert__logo-wrapper"><i className="fi fi-check large"></i></span>)
            }
        </div>
        <div className="alert__title">
                { props.title }
        </div>
        <div className="alert__message">{ props.message }</div>
        <div className="alert__action">
            <div className={`app-button ${props.isWarning? 'warn': 'success'}`} onClick={ props.onOKAction }>OK</div>
        </div>
    </div>
);

export default Alert;