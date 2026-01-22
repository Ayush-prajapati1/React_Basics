import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className='card'>
  <img src={props.img} alt="" />
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipstur delectus molestias nam a vitae incidunt ullam.</p>
      <button>view</button>
      </div>
  )
}

export default Card