import React from 'react'
import Rightcard from './Rightcard'

function Rightcontent(props) {
  return (
    <div id='right' className='h-full  rounded-4xl flex overflow-x-auto flex-nowrap gap-10 px-6 py-4 bg-blue-300 w-3/4'>
      {props.users.map(function(elem,idx){
        return  <Rightcard key=
        {idx} id={idx} img={elem.img} tag={elem.tag}/>

      })}
       
    </div>
  )
}

export default Rightcontent