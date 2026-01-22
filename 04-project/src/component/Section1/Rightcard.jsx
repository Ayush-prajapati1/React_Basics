import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcardcontent from './Rightcardcontent'
function Rightcard(props) {
    return (
        <div className='h-full  shrink-0 overflow-hidden relative w-70  rounded-4xl' >
            <img className='h-full w-full object-cover' src={props.img} alt="" />
           <Rightcardcontent tag={props.tag} id={props.id}/>
           

        </div>
    )
}

export default Rightcard