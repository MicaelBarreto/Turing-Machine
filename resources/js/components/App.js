import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom'
import Routes from './Routes'
import axios from 'axios'

class App extends Component {    
    render () {
        return (
            <div className='container'>
                <Routes />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))