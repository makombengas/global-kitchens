import { useTranslations } from 'next-intl'
import React from 'react'
import TeamBanner from '../../../components/teamBanner/TeamBanner'
import PubBanner from '../../../components/pubBanner/PubBanner'
import Image from 'next/image'

const AboutPage = () => {
  const t = useTranslations('Navigation')
  return (
    <div className="">
     <div className="w-full h-[6rem]  md:h-[7rem] text-white bg-[#141517] fixed"/>
      <div className='w-full h-full flex justify-center items-center '>
       {/*Header Image */}
      <div className="w-full h-full mt-[3.5rem] md:mt-[7rem] bg-[#141517a9] ">
        <div className="w-full relative  flex justify-center items-center  h-[10rem]  ">
          <Image src="/images/aboutImage.jpg" alt="team" width={1000} height={500} priority required  className="object-cover w-screen   object-top-center h-[10rem] " />
          <div className="w-full flex justify-center items-center text-gray-200 bg-[#1415177f] absolute h-[10rem]">
            
             <h1 className="text-2xl md:text-5xl text-center">{t('about')}</h1>
          
          </div>
        </div>
        
      </div>
    </div>
        <TeamBanner/>
    <PubBanner/>
    
    </div>
  )
}

export default AboutPage