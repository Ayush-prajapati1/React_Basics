import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
  
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=56`
      );
      setUserData(response.data);
      
  }
  useEffect(function(){
    getData()
  },[index])

  let printuserdata=<h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if(userData.length>0){
    printuserdata=userData.map(function(elem,idx){
      return <div key={idx}><a href={elem.url} target='_blank'>
        
        <div className='h-40 w-40 bg-white'>
        <img className='h-full object-cover' src={elem.download_url} alt="" />
      </div>
      </a>
      <h2>{elem.author}</h2>
      </div>
    })

    
  }

  return (
    <div className='bg-black h-screen text-white'>
      <button
        onClick={getData}
        className='px-4 py-2 m-4 text-white bg-blue-700 active:scale-95'
      >
        get data
      </button>

         <div className='flex flex-wrap gap-5' >
          {printuserdata}
         </div>
    <div className='flex p-4 gap-5 justify-center '>
      <button className='rounded bg-amber-500 px-4 py-2 cursor-pointer active:scale-75' onClick={()=>{
        if(idx>1){setIndex(index-1)
          setUserData([])
        }
      }}>Prev</button>
      <h4 className='py-1'>Page {index}</h4>
      <button className='rounded bg-amber-500 px-4 py-2 cursor-pointer active:scale-75'onClick={()=>{
        setIndex(index+1)
          setUserData([])
      }}>Next</button>
    </div>
    </div>
  )
}

export default App;
