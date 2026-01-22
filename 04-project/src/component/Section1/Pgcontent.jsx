import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

function Pgcontent(props) {
  return (
    <div className='h-[90vh] py-6 px-16 flex items-center gap-10  justify-between'>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Pgcontent