import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import LangProvider from './LangProvider'
import HomePage from './HomePage'
import ProtectedRoute from '../decorators/ProtectedRoute'
import history from '../store/history'
import '../stylesheets/App.css'

class App extends Component {
    state = {
        username: '',
        language: 'ru'
    };

    changeLanguage = language => (ev => this.setState({ language }));
    handleUserChange = (username) => this.setState({ username });

    render() {
        return (
            <ConnectedRouter history={history}>
                <LangProvider language={this.state.language}>
                    <div>
                        <ul>
                            <li onClick={this.changeLanguage('en')}>English</li>
                            <li onClick={this.changeLanguage('ru')}>Russian</li>
                        </ul>
                        <div>
                            <h2>Main menu</h2>
                            <div><NavLink activeStyle={{ color: 'red' }} to="/counter">Counter</NavLink></div>
                            <div><NavLink activeStyle={{ color: 'red' }} to="/filters">Filters</NavLink></div>
                            <div><NavLink activeStyle={{ color: 'red' }} to="/articles">Articles</NavLink></div>
                        </div>
                        <Switch>
                            <ProtectedRoute path="*" component={HomePage} />
                        </Switch>
                    </div>
                </LangProvider>
            </ConnectedRouter>
        );
    }
}


export default App