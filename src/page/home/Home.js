import React from 'react';
import Header from '../../component/header/Header'
import Login from '../user/Login'
import Register from '../user/Register'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header/>
                <Register/>
            </div>
        );
    }
}

export default Home;