import React from 'react'
import { AIAvatar } from './avatars'

const PromptSuggestions = () => {
  return (
    <div className='absolute bottom-[20%] left-0 w-screen h-screen overflow-hidden flex flex-col space-y-6 items-center justify-center'>
      <AIAvatar />
      <div className='flex flex-col items-center justify-center space-y-4'>
        <p className="text-neutral-500 font-mono border px-4 bg-neutral-50 p-2 rounded-full">slides.ai is coming soon 😏</p>
        <p className="text-5xl p-4 max-w-4xl text-center max-lg:text-4xl max-sm:px-8 text-transparent bg-clip-text font-bold bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-500">Chat with OpenAI's GPT 3.5 turbo</p>
      </div>
    </div>
  )
}

export default PromptSuggestions