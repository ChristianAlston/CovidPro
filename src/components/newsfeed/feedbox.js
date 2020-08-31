import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './feedbox.css'

var feedBox = (props) => {
    return (
        <div>
            <div className='box'>
                <h1>{props.title}</h1>
                <img src={props.img} />
                <p>{props.summary}</p>
                <button> See Later </button>
            </div>
        </div>
    )
}

export default feedBox