

import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (
    
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href="/">Asha</Link>
            </div>
            <div className="links">
<Link href="/youtube">Youtube</Link>
<Link href="/youtube/live">Live</Link>
<Link href="/code/repos">Code Repose</Link>
            </div>
        </div>
    </header>
  )
}

export default Header;
