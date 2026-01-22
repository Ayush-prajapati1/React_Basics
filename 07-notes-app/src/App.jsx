import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({ title, details })
    settask(copyTask)

    setTitle('')
    setdetails('')

  }
  const deleteNode = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    settask(copyTask)
  }

  return (
    <div className=' bg-black h-screen lg:flex   text-white'>
      <form action="" onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex p-10 lg:w-1/2 flex-col  gap-4  items-start '>

        <h1 className='font-bold text-4xl p-4 '>Add Notes</h1>
        <input type="text"
          placeholder='Enter Notes Heading'
          className='border-2 font-medium  rounded w-full outline-none px-5 py-2 '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea name="" id="" placeholder='Write Here'
          className='border-2 font-medium px-5 w-full  outline-none py-2 rounded h-35 '
          value={details}
          onChange={(e) => {
            setdetails(e.target.value)
          }} >
        </textarea>

        <button
          className='bg-white px-5 font-medium active:bg-gray-400 rounded w-full py-2 flex items-start flex-row outline-none text-black'>Add Notes
        </button>

      </form>
      <div className=' lg:border-l-2 lg:w-1/2 p-10 '>

        <h1 className='text-xl font-bold'>Your Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='bg-amber-100 flex justify-between flex-col item-start relative bg-cover h-50 w-40 text-black pt-4 pb-4 px-4 rounded-2xl'>
              {/* <h2 className='absolute top-25 bg-red rounded-full p-1 pl-30 text-xs'>
              <X size={16} color='red'strokeWidth={2.75} />
            </h2> */}
              <div>  <h3 className='leading-tight text-xl font-bold p-2'>{elem.title}</h3>
                <p className='mt-4 leading-tight font-mediun text-gray-800'>{elem.details}</p></div>
              <button
                onClick={() => {
                  deleteNode(idx)
                }}
                className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 rounded text-xs text-white'>Delete Notes</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App