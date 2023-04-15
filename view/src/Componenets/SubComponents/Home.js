import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ChatBox from './ChatBox'

function Home() {
  return (
    <>
        <Header/>
        <div className='chatcont'>
        <ChatBox />
        </div>
        <Footer/>
    
    </>
  )
}

export default Home