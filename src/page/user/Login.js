import React from 'react';
import './Login.css'
import InputBox from '../../component/input/InputBox'

class Login extends React.Component {

    render() {
        return (
            <div>
                <div class="login-container">
                    <div class="login-wrapper">
                        <h4>登录</h4>
                        <div>
                            <InputBox placeholder="账号"/>
                            <InputBox placeholder="密码"/>
                            <div class="operator-container">
                                <p class="text-left">注册</p>
                                <p class="text-right">忘记密码</p>
                            </div>
                            <button class="login-button login-button-enable">登录</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;