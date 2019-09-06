import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

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