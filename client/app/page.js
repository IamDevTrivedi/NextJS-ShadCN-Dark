import React from 'react'
import { SplineSceneComponent } from '@/components/SplineSceneComponent'
import { FeaturesSection } from '@/components/FeaturesSection'
import { ModeToggle } from '@/components/themeToggle'
import { TheReasons } from '@/components/Reasons'
import { TelegramBotPromo } from '@/components/TelegramBotPromo'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className='overflow-hidden pt-3 px-3 lg:px-0'>
      <SplineSceneComponent />
      <TheReasons />
      <FeaturesSection />
      < TelegramBotPromo />
      < Footer />


      {/* <ModeToggle /> */}

    </div>
  )
}
