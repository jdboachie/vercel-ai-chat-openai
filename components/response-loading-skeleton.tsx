import React from 'react'
import { AIAvatar } from './avatars'



const ResponseLoadingSkeleton = () => {
  return (
    <div id='loading' className="flex w-full items-center justify-center space-x-4 p-4">
      <div />
      <div className="">
        <AIAvatar className='animate-spin border-transparent' />
      </div>
    </div>
  )
}

export default ResponseLoadingSkeleton