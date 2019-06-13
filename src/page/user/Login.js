import React from 'react';
import './Login.css'
import InputBox from '../../component/input/InputBox'

class Login extends React.Component {

    render() {
        return (
            <div>
                <div className="login-container">
                    <div className="login-wrapper">
                        <h4>登录</h4>
                        <div>
                            <InputBox placeholder="账号" type="text"/>
                            <InputBox placeholder="密码" type="password"/>
                            <div className="operator-container">
                                <p className="text-left">注册</p>
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