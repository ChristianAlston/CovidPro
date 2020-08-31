import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dash.css'
import feedBox from '../newsfeed/feedbox'
import statTrack from '../statTrack/statTrack'

class SearchBar extends Component {
    render() {
        return (
            <input className='searchbar' placeholder='search news worldwide'></input>
        )
    }
}

class Card extends Component {
    render() {
        return (
            <div className='card'>

            </div>
        )
    }
}

class UserDash extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='dashbox'>
                    <div className='headerbox'>
                        <Link to='/'>  <h1 className='title'>Covid Pro <span><i class="fas fa-plus"></i></span></h1></Link>
                        <SearchBar></SearchBar>
                    </div>
                    <div className='bottombox'>
                        <div className='feed'>
                            <feedBox></feedBox>
                        </div>
                        <div className='cardbox'>
                            <Card>
                                <statTrack></statTrack>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default UserDash;