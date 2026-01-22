import React from 'react'
import Navbar from './Navibar'
import Pgcontent from './Pgcontent'

const Section1 = (props) => {
  console.log();
  return (
    <div className='h-screen'>
         <Navbar/>
         <Pgcontent users={props.users}/>
    </div>
 
  )
}

export default Section1