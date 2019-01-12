import React from 'react';
import PropTypes from 'prop-types';


class SingleInput extends React.Component {
    render(){
        return(
            <input
                ref={this.props.iref}
                className={`single-input ${this.props.class}`}
                name={this.props.name}
                type={this.props.inputType}
                value={this.props.content}
                onChange={function() {}}
                onKeyUp={this.props.controlFunc}
                placeholder={this.props.placeholder}
                pattern={this.props.pattern}
                title={this.props.patternTitle}
                required />
        )
    }
}

SingleInput.propTypes = {  
    inputType: PropTypes.oneOf(['text', 'email','tel']).isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    pattern: PropTypes.string,
    patternTitle: PropTypes.string,
    content: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
};

export default SingleInput;