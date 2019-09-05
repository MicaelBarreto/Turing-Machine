
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            machines: []
        }
    }

    componentWillMount() {
        axios.get('/api/machines')
            .then(res => {
                const machines = res.data
                this.setState({ machines })
            })
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='col-md-offset-2'>
                            <table className='table table-dark'>
                                <tr>
                                    <th>Q</th>
                                    <th>&#x3A3;</th>
                                    <th>&#x393;</th>
                                    <th>&#x3B4;</th>
                                    <th>q0</th>
                                    <th>&empty;</th>
                                    <th>F</th>
                                    <th>Palavra</th>
                                    <th>Resultado</th>
                                </tr>
                                {this.state.machines.map((machine)=>{
                                    return (
                                        <tr>
                                            <td>{machine.name}</td>
                                            <td>{machine.name}</td>
                                            <td>{machine.name}</td>
                                            <td>{machine.name}</td>
                                            <td>{machine.name}</td>
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
        )
    }
}