import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../logo.svg';

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
                <div class="header-wrapper">
                    <div class="name-container">
                        <img src={logo} />
                        <Link to="/"><p>扶摇中文网</p></Link>
                    </div>
                    <div class="my-book-list-wrapper">
                        <div class="my-book-list-container">
                            <Link to="login"><p>我的书架</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;