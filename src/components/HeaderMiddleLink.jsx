import React from 'react'
import '@/styles/HeaderMiddleLink.css'

// import {midLink, linkTextWrap, linkTextWrapActive} from '@/styles/HeaderMiddleLinks'

import Link from 'next/link';

const HeaderMiddleLink = ({icon, text, path, flag}) => {
      
  return (
    <div className="midLink">
      <div>{icon}</div>
      <div className={flag? "linkTextWrapActive": "linkTextWrap"}>
          <Link href={path} className="linkText">            
              {text}                 
          </Link>
          <div className='linkTextLine'></div>
      </div>
    </div>
  )
}

export default HeaderMiddleLink