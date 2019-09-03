
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
        )
    }
}