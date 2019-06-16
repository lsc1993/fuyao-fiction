import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../page/home/Home';
import Login from '../page/user/Login';
import Register from '../page/user/Register';
import BookDetail from '../page/book/BookDetail';

export default class HeaderRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/book" component={BookDetail}/>
                </Switch>
            </BrowserRouter>
        );
    }
}