import React from 'react'
import diamondBlue from '@/assets/diamondBlue.svg'
import coinGold from '@/assets/coinGold.svg'
import '@/styles/DiamondsAndCoins.css'

const DiamondsAndCoins = ({text}) => {
  const icons = [diamondBlue, coinGold]
  const rewards = [20000, 11000]
  return (
     text?
      <div className='diamonds'>
        <div className='icon'>{icons[0]}</div>
        <div className='num'>{rewards[0]}</div>    
      </div>:
      <div className='coins'>
        <div className='icon'>{icons[1]}</div>
        <div className='num'>{rewards[1]}</div>     
      </div>    
    
  )
}

export default DiamondsAndCoins