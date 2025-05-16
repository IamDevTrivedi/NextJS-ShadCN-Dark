import ChatArea from '@/components/ChatArea'
import { ChatSidebar } from '@/components/ChatSidebar'
import React from 'react'

export default function page() {
  return (
    <div className='flex h-screen'>
      <ChatSidebar />
      <ChatArea />
    </div>
  )
}
