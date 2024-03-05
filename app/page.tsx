import { AIAvatar } from '@/components/avatars'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { PaperPlaneTilt, SignIn } from "@phosphor-icons/react/dist/ssr";


const Page = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex flex-col space-y-6 items-center justify-center'>
      <div className='ring-gradient fixed z-[-1]' />
      <AIAvatar className='border-none w-15 h-15' />
      <div className='flex flex-col items-center justify-center space-y-4'>
        <p className="text-neutral-500 text-sm px-4 bg-transparent p-2 rounded-full border">slides.ai is coming soon 😏</p>
        <p className="text-6xl p-4 pb-0 max-w-5xl text-center max-lg:text-5xl max-sm:px-8 text-transparent bg-clip-text font-bold bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-900">Chat with OpenAI's GPT 3.5 turbo</p>
      </div>
      <p className="text-lg font-semibold max-sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 via-neutral-400 to-neutral-600">
        <span>Developed by </span>
        <Link
          href={'https://www.read.cv/judeboachie'}
          className='underline font-normal text-neutral-700 underline-offset-8 decoration-dotted'
        >
          Jude Boachie
        </Link>
      </p>
      <div className="flex space-x-4">
        <Button variant={'outline'} className='px-8 py-5 rounded-full hover:cursor-not-allowed' >
          <p className="">Login</p>
          <SignIn size={32} className='w-4 h-4' />
        </Button>
        <Button className='px-8 py-5 rounded-full' >
          <Link
            href='/chat'
            className='flex items-center space-x-2'
            >
              <p className="">Start a chat</p>
              <PaperPlaneTilt size={32} className='w-4 h-4' />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Page