import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/Header';
import InputBox from '../../component/input/InputBox';
import './Register.css';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="register-container">
                    <div className="register-wrapper">
                        <h4>注册</h4>
                        <div>
                            <InputBox placeholder="账号:6-15位字母、数字组合" type="text" />
                            <InputBox placeholder="密码:6-20位字母、数字组合" type="password" />
                            <InputBox placeholder="确认密码" type="password" />
                            <div className="operator-container">
                                <Link to="/login">
                                    <p className="text-left">已有账号?直接登录</p>
                                </Link>
                            </div>
                            <button id="regeister-btn" className="register-button register-button-enable">注册</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;