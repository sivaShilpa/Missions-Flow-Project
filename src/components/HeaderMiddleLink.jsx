import React from 'react'
import '@/styles/Header.css'
import Link from 'next/link';

const HeaderMiddleLink = ({icon, text, path}) => {
  function activeTab(evt) {
    let tablinks;
    tablinks = document.getElementsByClassName("linkTextWrapActive");
    
    tablinks.className = tablinks.className.replace(" linkTextWrapActive", "");
  
    evt.currentTarget.className += " linkTextWrapActive";
}
    
  return (
    <div className='midLink'>
        <div>{icon}</div>
        <div className='linkTextWrap' onClick={activeTab}>
            <Link href={path} className="linkText">            
                {text}                 
            </Link>
            <div className='linkTextLine'></div>
        </div>
    </div>
  )
}

export default HeaderMiddleLink