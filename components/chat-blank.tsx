import React from 'react'
import { AIAvatar } from './avatars'

const ChatBlank = () => {
  return (
    <div className='flex w-full h-[50dvh] items-center justify-center'>
      <AIAvatar className='animate-pulse border-transparent' />
    </div>
  )
}

export default ChatBlank