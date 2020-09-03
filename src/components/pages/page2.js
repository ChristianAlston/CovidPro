import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './page2.css'

class Page2 extends Component {
    render() {
        return (
            <div>
                <div className='page2'>
                    <h1 className='number'>02</h1>
                    <div className='about'>
                        <h1 className='heading'>A little about this app</h1>
                        <p>Covid Pro <span><i class="fas fa-plus"></i></span> is an app built using the PERN Stack. It's intended purpose is to track covid cases worldwide and keep track of the CDC's updates. Some of its features include a global map and a live feed update based on the CDC's API.</p>
                        <Link to='/page3'> <button className='next'>Next</button></Link>
                    </div>
                </div>
            </div>
        )
    }


}

export default Page2;