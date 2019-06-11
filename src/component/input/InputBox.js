import React from 'react';
import './InputBox.css'

class InputBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="input-container"> 
                <input placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default InputBox;