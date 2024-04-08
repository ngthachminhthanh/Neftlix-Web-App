import React from 'react'
import SavedShow from '../components/SavedShow'

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img 
                    className='w-full h-[400px] object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/52be2fc8-6518-43f8-bdf2-707da90a89bb/VN-vi-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
            <SavedShow />
        </>
    )
}

export default Account