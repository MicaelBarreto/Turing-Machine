import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Maquina de Turing</Link>
            <Link className='nav-item' to='/'>Home</Link>
            <Link className='nav-item' to='/create'>Nova</Link>
        </div>        
    </nav>
)

export default Header