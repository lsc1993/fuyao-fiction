import React from 'react';
import Header from '../../component/header/Header';
import './Home.css';
import {Button} from 'antd-mobile';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div class="home-wrapper">
                    <div class="home-container">
                        <div>
                            <img src={require("../../res/img/preview.jpg")} />
                        </div>
                        <div class="home-book-type-container">
                            <div class="home-book-type-title">
                                <p>作品分类</p>
                            </div>
                            <div class="home-book-type-content">
                                <ul>
                                    <li><p>悬疑</p></li>
                                    <li><p>悬疑</p></li>
                                    <li><p>悬疑</p></li>
                                    <li><p>悬疑</p></li>
                                    <li><p>悬疑</p></li>
                                    <li><p>悬疑</p></li>
                                </ul>
                            </div>
                        </div>
                        <Button type="primary" size="small">start</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;