import React from 'react'

function  Rightcardcontent(props) {
  return (
   
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between' >
                <h2 className='bg-white text-2xl font-semibold h-10 w-10 rounded-full flex justify-center items-center'>{props.id+1}</h2>
                <div className=''>
                    <p className='text-lg leading-normal text-white mb-14' >et consectetur adipisicing elit. Hic natus ratione, enim ut nam iure perspiciatis eveniet debitis nesciunt atque! Dicta, recusandae? Numquam eaque dignis</p>
                    <div className='flex justify-between'> <button className='bg-blue-500 text-white font-semibold px-3 py-3 rounded-full t'>{props.tag}</button>
                        <button className='bg-blue-500 text-white font-semibold px-4 py-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        
  )
}

export default  Rightcardcontent