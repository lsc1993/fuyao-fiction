import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logo.svg';
import { Flex } from 'antd-mobile';

class Header extends React.Component {

    componentDidMount() { }

    componentWillUnmount() { }

    componentWillUpdate() { }

    render() {
        return (
            <div className="fixed-header">
                <div className="header-wrapper">
                    <div className="name-container">
                        <Flex align="center" alignContent="center">
                            <img src={logo} alt="" />
                            <Link to="/"><p>扶摇中文网</p></Link>
                        </Flex>
                    </div>
                    <div className="user-message-container">
                        <Link to="book"><p>我的书架</p></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;