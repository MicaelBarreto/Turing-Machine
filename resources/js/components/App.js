import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Header from './partials/Header'
import axios from 'axios'

class App extends Component {
    constructor(props){
        this.state={
            machines: []
        }
    }

    componentWillMount = () => {
        axios.get('/api/machines')
            .then(res => {
                const machines = res.data
                this.setState({ machines })
            })
    }
    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                    </div>
                </BrowserRouter>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>            
                            <h1 className='col-md-4'>
                                Maquinas Anteriores
                            </h1>
                            <div className='col-md-2 pull-right'>
                                <Link className='btn btn-success' to='/machine/create'>Nova</Link>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='col-md-offset-2'>
                                <table className='table table-dark'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                    </tr>
                                    {this.state.machines.map((machine)=>{
                                        return (
                                            <tr>
                                                <td>{machine.name}</td>
                                                <td>{machine.name}</td>
                                                <td>{machine.name}</td>
                                                <td>{machine.name}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))