import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { AIAvatar } from './avatars'



const ResponseLoadingSkeleton = () => {
  return (
    <div id='loading' className="flex items-start space-x-4 p-4">
      <AIAvatar />
      {/* <div className="space-y-2">
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div> */}
      <hr className='animate-pulse w-full' />
    </div>
  )
}

export default ResponseLoadingSkeleton