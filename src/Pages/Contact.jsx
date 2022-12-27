import React from 'react'

const Contact = () => {
  return (
    <div className='container m-auto p-20'>
      <h1></h1>
      <form action="">
        <div className='lg:flex  gap-5 mb-3'>
          <label htmlFor="" className='flex-1 text-2xl font-semibold text-light-blue-100'>First Name
            <input className='border mt-3 border-gray-300 block w-full p-5 rounded-sm shadow-sm shadow-gray-300' type="text" />
          </label>
          <label htmlFor="" className='flex-1 text-2xl font-semibold text-light-blue-100'>Last Name
            <input className='border mt-3 border-gray-300 block w-full p-5 rounded-sm shadow-sm shadow-gray-300' type="text" />
          </label>
        </div>
        <label htmlFor="" className='flex-1  text-2xl font-semibold text-light-blue-100'>Subject
            <input className='border mt-3 mb-3 border-gray-300 block w-full p-5 rounded-sm shadow-sm shadow-gray-300' type="text" />
          </label>
          <label htmlFor="" className='flex-1 text-2xl font-semibold text-light-blue-100'>Message
            <textarea rows={10} className='border mt-3  border-gray-300 block w-full p-5 rounded-sm shadow-sm shadow-gray-300' type="text" />
          </label>
      </form>
    </div>
  )
}

export default Contact