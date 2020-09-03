import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './map.css'





class Globe extends Component {
    render() {
        return (
            <div id='mapContainer'>
                <div className='mapof'>
                    <iframe width="1024" height="576" src="https://app.developer.here.com/coronavirus/" frameborder="0"></iframe>
                </div>
            </div>
        )
    }
}

export default Globe

