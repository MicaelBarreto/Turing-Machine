import React, { Component } from 'react'
import InputMask from 'react-input-mask'

export default class Machine extends Component {
    constructor(props){
        super()
        this.state = {
            sigma: [
                {name:''},
            ]
        }
    }

    addNew = () => {
        sigma = [...this.sigma];
        sigma.push({name: ''});
        this.setState({ sigma });
    }

    render() {
        return (
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label className='col-md-2'>Q</label>
                        <div className='col-md-10'>
                            <InputMask name="" className='form-control' placeholder='{q0,q1,q2}' mask={['{a9(,a9)*}']} />
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-12">
                        <div className='col-md-6'>
                            <div className="form-group">
                                <label className='col-md-2'>&#x3A3;</label>
                                <div className='col-md-10'>
                                    <input name='' className='form-control'></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='col-md-2'>&#x393;</label>
                                <div className='col-md-10'>
                                    <input name='' className='form-control'></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='col-md-2'>Palavra</label>
                                <div className='col-md-10'>
                                    <input name='' className='form-control'></input>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="form-group">
                                <label className='col-md-2'>q0</label>
                                <div className='col-md-10'>
                                    <input name='' className='form-control'></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='col-md-2'>&empty;</label>
                                <div className='col-md-10'>
                                    <input name='' className='form-control'></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='col-md-2'>F</label>
                                <div className='col-md-10'>
                                    <input name='' className='form-control'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    {sigma.map((sig, index) => (
                        <div className="form-group">
                            <label className='col-md-2'>&#x3B4;</label>
                            <div className='col-md-10'>
                                <input name={index} className='form-control'></input>
                            </div>
                        </div>
                    ))}
                    <div className="form-group">
                        <div className='col-md-10'>
                            <button className='btn btn-primary' onClick={this.addNew}>Rodar</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className='col-md-10'>
                            <button className='btn btn-primary'>Rodar</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='col-md-2'>Resultado</label>
                        <div className='col-md-10'>
                            <textarea className='form-control'></textarea>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}