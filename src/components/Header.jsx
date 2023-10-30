"use client"
import React, { useState, useEffect} from 'react'
import '../styles/Header.css'
import Image from 'next/image'
import homeLogo from "@/assets/homeLogo.svg"
import Link from 'next/link'
import HeaderMiddleLink from './HeaderMiddleLink'
import diamondBlue from '../assets/diamondBlue.svg'
import coinGold from '../assets/coinGold.svg'
import avatar from '../assets/avatar.svg'
import status from '../assets/status.svg'

const Header = () => {
    const [flag, setFlag] = useState(false);    

    return (
        <>
            <div className='header'>
                <Link className='headerLeft' href="/">
                    <Image src={homeLogo} alt="logoHome" />
                </Link>     
                
                <div className='headerMiddle'>
                    <HeaderMiddleLink icon='🚀' text='Missions' path='/missions' onClick={() => setFlag(currentState => !currentState)} flag={flag}/>
                    <HeaderMiddleLink icon='🏆' text='Leaderboard' path='/leaderboard' onClick={() => setFlag(currentState => !currentState)} flag={flag}/>
                    <HeaderMiddleLink icon='💰' text='Rewards' path='/rewards' onClick={() => setFlag(currentState => !currentState)} flag={flag}/>
                </div>
                
                <div className="headerRight">
                    <div className="diamonds">
                        <div className='icon'>
                            <Image src={diamondBlue} alt="diamond"/>
                        </div>
                        <div className='num'>20,000</div>    
                    </div>
                    <div className="coins">
                        <div className='icon'>
                            <Image src={coinGold} alt="coin"/>
                        </div>
                        <div className='num'>11,000</div>    
                    </div>
                    <div className='Avatar'>                       
                        <Image src={avatar} alt="avatar" className="avatar"/>
                        <Image src={status} alt="status" className='status' />                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header