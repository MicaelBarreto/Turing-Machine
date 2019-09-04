import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './partials/Header'
import Machine from './Machine'
import Home from './Home'


export default class Routes extends Component {    
    render() {
        return(
            <Router>
                <Header />
                <Route path='/' exact={true} component={Home} />
                <Route path='/create' component={Machine} />
            </Router>
        )
    }
}