import { useTranslations } from 'next-intl'
import React from 'react'
import TeamBanner from '../../../components/teamBanner/TeamBanner'
import PubBanner from '../../../components/pubBanner/PubBanner'

const AboutPage = () => {
  const t = useTranslations('Navigation')
  return (
    <div className="">
     <div className="w-full h-[6rem]  md:h-[7rem] text-white bg-[#141517] fixed"/>
      <div className='w-full h-screen flex justify-center items-center '>

      <div className="w-full px-8 h-full mt-[14rem]">
        <h1>{t('about')}</h1>

      </div>
    </div>
        <TeamBanner/>
    <PubBanner/>
    
    </div>
  )
}

export default AboutPage