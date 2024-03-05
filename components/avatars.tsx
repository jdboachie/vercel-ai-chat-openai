import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

import React from 'react'

export const UserAvatar = () => {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src="user.jpeg" className="object-cover border" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  )
}

export const AIAvatar = ({className}: {className?: string}) => {
  return (
    <Avatar className={cn("w-10 h-10 p-1 border rounded-full", className)}>
      <AvatarImage src="openai.svg" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  )
}