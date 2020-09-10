import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dash.css'
import feedBox from '../newsfeed/feedbox'
import Signup from './signup'




class Card extends Component {
    render() {
        return (
            <div className='card'>

            </div>
        )
    }
}

class Tweet1 extends Component {
    render() {
        return (
            <div className='tweet'>
                <div className='tweetCard'>
                    <div className='topblock'></div>
                    <div className='wrap'>
                        <h3 className='fakeName'>CDC</h3>
                        <p className='fakeTwitter'>@NotTheCDC</p>
                        <p className='fake'>We are not the real CDC, this is just a mock-up. </p>
                    </div>
                    <ul className='icons'>
                        <li><i class="far fa-heart"></i></li>
                        <li><i class="fas fa-share"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-facebook"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Tweet2 extends Component {
    render() {
        return (
            <div className='tweet'>
                <div className='tweetCard'>
                    <div className='topblock'></div>
                    <div className='wrap'>
                        <h3 className='fakeName'>Thanos</h3>
                        <p className='fakeTwitter'>@Thanos</p>
                        <p className='fake'>The hardest choices require the strongest wills.</p>
                    </div>
                    <ul className='icons'>
                        <li><i class="far fa-heart"></i></li>
                        <li><i class="fas fa-share"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-facebook"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Tweet3 extends Component {
    render() {
        return (
            <div className='tweet'>
                <div className='tweetCard'>
                    <div className='topblock'></div>
                    <div className='wrap'>
                        <h3 className='fakeName'>Two-Face</h3>
                        <p className='fakeTwitter'>@Harvey Dent</p>
                        <p className='fake'>You either die a hero, or live long enough to see yourself become the villain.</p>
                    </div>
                    <ul className='icons'>
                        <li><i class="far fa-heart"></i></li>
                        <li><i class="fas fa-share"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-facebook"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Tweet4 extends Component {
    render() {
        return (
            <div className='tweet'>
                <div className='tweetCard'>
                    <div className='topblock'></div>
                    <div className='wrap'>
                        <h3 className='fakeName'>Palps</h3>
                        <p className='fakeTwitter'>@Emperor Palpatine</p>
                        <p className='fake'>I AM the senate.</p>
                    </div>
                    <ul className='icons'>
                        <li><i class="far fa-heart"></i></li>
                        <li><i class="fas fa-share"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-facebook"></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Tweet5 extends Component {
    render() {
        return (
            <div className='tweet'>
                <div className='tweetCard'>
                    <div className='topblock'></div>
                    <div className='wrap'>
                        <h3 className='fakeName'>Walter White</h3>
                        <p className='fakeTwitter'>@Heisenburg</p>
                        <p className='fake'>I AM the one who knocks.</p>
                    </div>
                    <ul className='icons'>
                        <li><i class="far fa-heart"></i></li>
                        <li><i class="fas fa-share"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-facebook"></i></li>
                    </ul>
                </div>
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
                    </div>
                    <div className='bottombox'>
                        <div className='feed'>
                            <feedBox>
                                <h1 className='yourfeedtitle'>CovidPro Live Feed Updates</h1>
                                <Tweet1 />
                                <Tweet2 />
                                <Tweet3 />
                                <Tweet4 />
                                <Tweet5 />
                            </feedBox>
                        </div>
                        <div className='cardbox'>
                            <Card></Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default UserDash;