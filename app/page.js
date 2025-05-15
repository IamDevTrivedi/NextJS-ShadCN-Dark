import React from 'react'
import { ModeToggle } from '@/components/themeToggler'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-9xl'>
        no one cares
      </h1>

      <ModeToggle />
    </div>
  )
}
