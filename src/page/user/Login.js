import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/Header';
import InputBox from '../../component/input/InputBox';
import './Login.css';

class Login extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="login-container">
                    <div className="login-wrapper">
                        <h4>登录</h4>
                        <div>
                            <InputBox placeholder="账号" type="text" />
                            <InputBox placeholder="密码" type="password" />
                            <div className="operator-container">
                                <Link to="/register">
                                    <p className="text-left">注册</p>
                                </Link>
                                <p className="text-right">忘记密码</p>
                            </div>
                            <button className="login-button login-button-enable">登录</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;