import LeftSide from '@components/LeftSide'
import RightSide from '@components/RightSide'
import '@styles/globals.css'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='login_page'>
       <LeftSide />
       <RightSide />
    </div>
  )
}

export default Home
