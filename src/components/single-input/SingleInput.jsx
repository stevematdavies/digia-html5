import React from 'react';
import PropTypes from 'prop-types';


class SingleInput extends React.Component {
    render(){
        return(
            <div className={`single-input ${this.props.class}`}>
                <input
                    name={this.props.name}
                    type={this.props.inputType}
                    value={this.props.content}
                    onChange={this.props.controlFunc}
                    placeholder={this.props.placeholder} 
                    contentEditable="true"
                    required="required" />
            </div>
        )
    }
}

SingleInput.propTypes = {  
    inputType: PropTypes.oneOf(['text', 'email','tel']).isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
};

export default SingleInput;