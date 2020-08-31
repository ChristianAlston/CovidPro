import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './user.css'

class User extends Component {
    render() {
        return (
            <div>
                <div className='userboxes'>
                    <h1 className='title'>Covid Pro <span><i class="fas fa-plus"></i></span></h1>
                    <div className='boxes'>
                        <div className='user'>

                        </div>
                        <div className='stats'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User