import React from 'react';
import './Register.css'
import InputBox from '../../component/input/InputBox'

class Register extends React.Component {
    render() {
        return (
            <div>
                <div class="register-container">
                    <div class="register-wrapper">
                        <h4>注册</h4>
                        <div>
                            <InputBox placeholder="账号:6-15位字母、数字组合"/>
                            <InputBox placeholder="密码:6-20位字母、数字组合"/>
                            <InputBox placeholder="确认密码"/>
                            <div class="operator-container">
                                <p class="text-left">已有账号?直接登录</p>
                            </div>
                            <button id="regeister-btn" class="register-button register-button-enable">注册</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;