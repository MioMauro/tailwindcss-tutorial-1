import React from 'react'

const SecondGrid = () => {
return (
    
    <div className='min-h-screen grid place-content-center bg-gray-200'>
        <h1 className='text-center'>SecondGrid</h1>
        <div className='bg-yellow-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center'>
            <div className='bg-teal-200 w-32 h-32 rounded-full grid place-content-center' >
                <div className='bg-red-500 w-16 h-16 rounded-full ' ></div>
            </div>
    </div>
    </div>
)
}

export default SecondGrid