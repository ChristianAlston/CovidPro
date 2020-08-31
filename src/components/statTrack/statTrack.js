import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './statTrack.css'

var statTrack = (props) => {
    return (
        <div className='stats'>
            <ul className='county'>
                <h2>{props.county}</h2>
                <li>{props.cases}</li>
                <li>{props.recovered}</li>
                <li>{props.deaths}</li>
            </ul>
            <ul className='state'>
                <h2>{props.state}</h2>
                <li>{props.cases}</li>
                <li>{props.recovered}</li>
                <li>{props.deaths}</li>
            </ul>
            <ul className='country'>
                <h2>{props.country}</h2>
                <li>{props.cases}</li>
                <li>{props.recovered}</li>
                <li>{props.deaths}</li>
            </ul>
            <ul className='world'>
                <h2>{props.world}</h2>
                <li>{props.cases}</li>
                <li>{props.recovered}</li>
                <li>{props.deaths}</li>
            </ul>
        </div>
    )
}

export default statTrack