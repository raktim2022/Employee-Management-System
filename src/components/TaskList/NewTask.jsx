import React from 'react'

const NewTask = ({
    active,
    newTask,
    failed,
    completed,
    title,
    description,
    date,
    onAccept,
    onCancel
  }) => {
  return (
    <div
      className={`w-1/4 flex-shrink-0 bg-blue-500 rounded-lg h-72 text-ellipsis overflow-hidden p-5`}
    >
      <div className="flex justify-between items-center">
        <h3
          className={`bg-blue-600 uppercase py-1 px-2 rounded-lg`}
        >
          {newTask && !active ? "new Task" : ""}
        </h3>
        <h3 className="text-xl text-black font-semibold capitalize">{date}</h3>
      </div>
      <h2 className="text-2xl p-2 font-semibold">{title}</h2>
      <p className="h-28 text-lg text-ellipsis overflow-hidden ">
        {description}
      </p>
      <div className='flex w-full justify-between items-center'>
      <button onClick={()=>onAccept(title,date)} className=' w-1/3 bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-300 rounded-md text-lg p-3' >Accept</button>
      <button onClick={()=>onCancel(title,date)} className=' w-1/3 bg-red-600 hover:bg-red-700 transition ease-in-out duration-300 rounded-md text-lg p-3' >Cancel</button>
      </div>
    </div>
  )
}

export default NewTask