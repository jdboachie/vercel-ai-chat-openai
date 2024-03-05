import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { AIAvatar } from './avatars'



const ResponseLoadingSkeleton = () => {
  return (
    <div id='loading' className="flex w-full items-center justify-center space-x-4 p-4">
      <div />
      <div className="">
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>
    </div>
  )
}

export default ResponseLoadingSkeleton