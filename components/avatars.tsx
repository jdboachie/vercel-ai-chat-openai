import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import React from 'react'

export const UserAvatar = () => {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src="user.jpeg" className="object-cover border" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export const AIAvatar = () => {
  return (
    <Avatar className="w-10 h-10 p-1 border rounded-full">
      <AvatarImage src="openai.svg" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  )
}