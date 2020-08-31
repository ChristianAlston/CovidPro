import React, { Component } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'



class Nav extends Component {
    state = {
        name: 'name',
        yes: 'nope'
    }
    render() {
        return (
 
            <div className='sidenav'>
                <div className='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line1'></div>
                </div>
                <ul className='list'>
                    <Link to='/user'> <a className='link' ><li><i class="fas fa-user"></i></li></a></Link>
                    <Link to='/dash'> <a className='link'><li><i class="fas fa-home"></i></li></a></Link>
                    <Link to='/map'> <a className='link'><li><i class="fas fa-globe"></i></li></a> </Link>
                    <Link to='/travel'> <a className='link' ><li><i class="fas fa-car"></i></li></a></Link>
                    <Link to='/'> <a className='link'><li><i class="fas fa-sign-out-alt"></i></li></a></Link>
                </ul>

            </div>
        )
    }
}

export default Nav;


