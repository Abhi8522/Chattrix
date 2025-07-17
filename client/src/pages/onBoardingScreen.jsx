import React from 'react'

const onBoardingScreen = () => {
  return (
    <div className='bg-zinc-900 w-full h-screen flex items-center justify-center'>
        <div className='bg-zinc-800 rounded rounded w-md max-w-[90%] p-10 h-[700px]'>
                {/* Image */}
                <div>
                        <img src="" alt="" />
                </div>
                {/* Text */}
                <div>
                       <div>
                                 <h1 className='text-zinc-100 text-center text-3xl'>Best SocialApp to Make</h1>
                                 <h1 className='text-zinc-100 text-center text-3xl'>New Friends</h1>
                                 <p className='text-zinc-400 text-center text-sm'>with chattrix you will find new friends from various countries and regions of the world.</p>
                       </div>
                </div>
        </div>
    </div>
  )
}

export default onBoardingScreen
