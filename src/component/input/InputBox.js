import React from 'react';
import './InputBox.css'

class InputBox extends React.Component {

    render() {
        return (
            <div className="input-container"> 
                <input placeholder={this.props.placeholder} type={this.props.type} />
            </div>
        );
    }
}

export default InputBox;