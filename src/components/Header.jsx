"use client"
import React from 'react'
import '../styles/Header.css'
import Image from 'next/image'
import homeLogo from "@/assets/homeLogo.svg"
import Link from 'next/link'
import HeaderMiddleLink from './HeaderMiddleLink'
import diamondBlue from '../assets/diamondBlue.svg'
import coinGold from '../assets/coinGold.svg'
import avatar from '../assets/avatar.svg'
import status from '../assets/status.svg'
import { usePathname } from 'next/navigation';


const Header = () => {
       
    const router = usePathname();

    return (
        <>
            <div className='header'>
                <Link className='headerLeft' href="/">
                    <Image src={homeLogo} alt="logoHome" />
                </Link>     
                
                <div className='headerMiddle'>
                    {/* {console.log(router)} */}
                    <HeaderMiddleLink icon='🚀' text='Missions' path='/Missions' flag={router == "/Missions" ?true: false}/>
                    <HeaderMiddleLink icon='🏆' text='Leaderboard' path='/Leaderboard' flag={router == "/Leaderboard" ?true: false}/>
                    <HeaderMiddleLink icon='💰' text='Rewards' path='/Rewards' flag={router == "/Rewards" ?true: false}/>
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