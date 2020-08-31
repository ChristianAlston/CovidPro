import React, { Component } from 'react'
import './heroimage.css'
import image from './workpic.jpg'

class HeroImage extends Component {
    render() {
        return (
            <img src={image} alt='work'></img>
        )
    }
}

export default HeroImage