import React from 'react';
import './Header.css';
import logo from '../../logo.svg'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentWillUpdate() { }

    render() {
        return (
            <div class="fixed-header">
                <div class="hreader-wrapper">
                    <div class="name-container">
                        <img src={logo} />
                        <p>扶摇中文网</p>
                    </div>
                    <div class="my-book-list-wrapper">
                        <div class="my-book-list-container">
                            <p>我的书架</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;