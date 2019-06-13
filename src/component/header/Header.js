import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logo.svg';

class Header extends React.Component {

    componentDidMount() { }

    componentWillUnmount() { }

    componentWillUpdate() { }

    render() {
        return (
            <div className="fixed-header">
                <div className="header-wrapper">
                    <div className="name-container">
                        <img src={logo} alt=""/>
                        <Link to="/"><p>扶摇中文网</p></Link>
                    </div>
                    <div className="my-book-list-wrapper">
                        <div className="my-book-list-container">
                            <Link to="login"><p>我的书架</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;