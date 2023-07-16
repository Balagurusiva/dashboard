import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      this is home page
      <Link href="/dashboard">dashboard</Link>
    </div>
  )
}

export default Home
