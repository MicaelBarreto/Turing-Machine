import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <Link className='navbar-brand' to='/'>Maquina de Turing</Link>
        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">               
                <li class="nav-item">
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li class="nav-item">
                    <Link className='nav-link' to='/create'>Nova</Link>
                </li>    
            </ul>
        </div>        
    </nav>
)

export default Header