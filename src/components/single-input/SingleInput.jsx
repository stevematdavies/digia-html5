import React from 'react';
import PropTypes from 'prop-types';


class SingleInput extends React.Component {
    render(){
        return(
            <div className="single-input">
                <input
                    name={this.props.name}
                    type={this.props.inputType}
                    value={this.props.content}
                    onChange={this.props.controlFunc}
                    placeholder={this.props.placeholder} 
                    required/>
            </div>
        )
    }
}

SingleInput.propTypes = {  
    inputType: PropTypes.oneOf(['text', 'email','tel']).isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]).isRequired,
    placeholder: PropTypes.string,
};

export default SingleInput;