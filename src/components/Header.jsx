"use client"
import React from 'react'
import '../styles/Header.css'
import Image from 'next/image'
import homeLogo from "@/assets/homeLogo.svg"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HeaderMiddleLink from './HeaderMiddleLink'

const Header = () => {
        
  return (
    <>
        <div className='header'>
            <Link className='headerLeft' href="/">
                <Image src={homeLogo} alt="logoHome" />
            </Link>              
            <div className='headerMiddle'>
                <HeaderMiddleLink icon={'🚀'} text={'Missions'} path={'/missions'}/>
                <HeaderMiddleLink icon={'🏆'} text={'Leaderboard'} path={'/leaderboard'}/>
                <HeaderMiddleLink icon={'💰'} text={'Rewards'} path={'/rewards'}/>
            </div>
            <div className="headerRight">
                <div>diamonds</div>
                <div>coins</div>
                <div>avatar</div>
            </div>            
        </div>
    </>
  )
}

export default Header