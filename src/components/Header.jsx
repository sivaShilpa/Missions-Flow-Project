import React from 'react'
import '../styles/Header.css'
import Image from 'next/image'
import homeLogo from "@/assets/homeLogo.svg"
import Link from 'next/link'
import HeaderMiddle from './HeaderMiddle'

const Header = () => {
  return (
    <>
        <div className='header'>
            <Link className='headerLeft' href="/">
                <Image src={homeLogo} alt="logoHome" />
            </Link>
            {/* <div className='headerMiddle'><HeaderMiddle/></div> */}
            
            <div className='headerMiddle'>
                <Link href="/missions">
                    <div className='tab'>🚀 Missions</div>
                    <div className='tab'></div>
                </Link>
                <Link href="/leadership">🏆 Leaderboard</Link>
                <Link href="/rewards">💰 Rewards</Link>
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