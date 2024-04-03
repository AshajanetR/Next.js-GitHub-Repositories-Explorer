import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
<h1>NAVBAR</h1>
    <ul>
    <li>
<Link href="/">HOME</Link>
    </li>
    <li>
      <Link href="/youtube">YOUTUBE</Link>
    </li>
    <li>
      <Link href="/youtube/live">LIVE</Link>
    </li>
    </ul>
    </div>
  )
}

export default Home
