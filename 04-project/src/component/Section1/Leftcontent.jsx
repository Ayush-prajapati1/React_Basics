import React from 'react'
import Arrow from './Arrow'
import Herotext1 from './Herotext1'


function Leftcontent() {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'> 
 
       <div><Herotext1/></div> 
        <Arrow/>
        </div>
  )
}

export default Leftcontent