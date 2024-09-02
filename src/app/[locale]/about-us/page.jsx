"use client"

import { useTranslations } from 'next-intl'
import React from 'react'
import TeamBanner from '../../../components/teamBanner/TeamBanner'
import PubBanner from '../../../components/pubBanner/PubBanner'
import Image from 'next/image'
import { useState } from 'react'



const AboutPage = () => {
  const t = useTranslations('Navigation')
  const about = useTranslations('About')
  const mapAbout = about.raw('aboutBottom');
  const[aboutInfo, setAboutInfo] = useState([])
  const [activeDiv, setActiveDiv] = useState(1);
    const findAboutById = (id) => {
      const findAbout= mapAbout.find((item) => item.id === id)
      setAboutInfo(findAbout)
      setActiveDiv(id);

    }

  
  return (
    <div className="">
     <div className="w-full h-[5rem]  md:h-[7rem] bg-[#141517] text-white md:bg-[#141517] py-4 md:py-7 fixed"/>
      <div className='w-full h-full flex justify-center items-center '>
       {/*Header Image */}
      <div className="w-full h-full mt-[5rem] md:mt-[7rem]  ">
        <div className="w-full relative  flex justify-center items-center  h-[10rem]  ">
          <Image src="/images/aboutImage.jpg" alt="team" width={1000} height={500} priority required  className="object-cover w-screen   object-top-center h-[10rem] " />
          <div className="w-full flex justify-center items-center text-gray-200 bg-[#1415177f] absolute h-[10rem]">
            
             <h1 className="text-2xl md:text-5xl text-center">{t('about')}</h1>
          
          </div>
        </div>
   

        
      </div>
    </div>
    <div className="w-full h-full mt-12 flex flex-col gap-8 px-8  sm:px-6  xl:px-28 md:pt-12  ">
      <h1 className="text-center text-xl md:text-4xl flex text-[#8EC63F] flex-col gap-4 uppercase ">
     {about('title')} <b className='px-8 text-sm md:text-2xl lowercase text-gray-700'>– {about('slogan')} -</b>
      </h1>
      <p className="text-center md:text-justify text-sm md:text-xl text-gray-500">
     {about('description')}
      </p>
    </div>
        <div className="w-full h-full flex mt-8 flex-col md:flex-row justify-around gap-2 md:gap-4 px-8 sm:px-6 xl:px-24  pb-8 p-4  ">

        <div className=" w-full h-auto sm:h-[24rem]  sm:w-[100%] xl:w-[50%] grid grid-flow-row-dense grid-cols-1 md:grid-cols-1 grid-rows-3 py-4 md:py-0 xl:px-4  gap-4 lg:gap-8">

          {
            mapAbout.map((item) => (
              <div key={item.id} className={` ${activeDiv === item.id ? 'bg-[#8EC63F] -z-10 scale-105 border-2 shadow-lg shadow-[#00000085] border-gray-500/50 text-center rounded-xl py-4 px-4  ':""} ${item.id === aboutInfo.id  ? '-z-10 scale-105 h-full md:h-[5rem] bg-[#8EC63F] flex justify-center md:justify-normal  items-center gap-4 font-bold hover:bg-[#98bf62] hover:font-extrabold cursor-pointer hover:border-[#8EC63F]  border-2 shadow-lg shadow-[#00000085] border-gray-500/50 text-center rounded-xl py-4 px-4 ' : 'h-full md:h-[5rem] flex justify-center md:justify-normal  items-center gap-4 font-bold hover:border-[#8EC63F] hover:border-4  hover:font-extrabold cursor-pointer hover:text-slate-900  border-2   shadow-sm shadow-[#00000085] border-gray-500/50 text-center rounded-xl py-4 px-4 '  }  `} onClick={() => findAboutById(item.id)}>
                <i className={`${activeDiv === item.id ? 'border-8 border-[#ffffff]"} hidden md:block  bg-gray-900 text-gray-100 p-3 rounded-full  text-xl md:text-5xl':""}  ${item.id === aboutInfo.id && "border-8 border-[#ffffff]"} hidden md:block  bg-gray-900 text-gray-100 p-3 rounded-full  text-xl md:text-5xl`} >
                
                   
                </i>
                <h1 className="text-center md:text-left text-lg md:text-[1rem] xl:text-xl">
                  {item.title}
                </h1>
                
            </div>
            ))
          }
        </div>
        <div className="w-full h-auto  px-4 md:px-8  rounded-xl">
         {aboutInfo.title ?<h1 className="text-xl border-b-2 border-b-[#8EC63F] md:text-3xl mb-4 font-bold"> {aboutInfo.title}</h1>:
        <h1 className="text-xl md:text-3xl mb-2 border-b-4 border-b-[#8EC63F] font-bold"> {mapAbout[0].titleInfos}</h1>}
        {aboutInfo.description ? <p className="text-sm md:text-lg   font-light ">
             {aboutInfo.description}
          </p>:<p className="text-sm md:text-lg  font-light ">
             {mapAbout[0].description}
          </p>  }
         {
        <ul className='flex flex-col gap-3'>
       
          <h3 className="text-xl md:text-2xl  font-bold">{aboutInfo.descriptionInfosOne}  </h3>
          <li className='text-sm md:text-lg  font-light'> {aboutInfo.descriptionOne}</li>
          <h3 className="text-xl md:text-2xl  font-bold">{aboutInfo.descriptionInfosTwo}  </h3>
          <li className='text-sm md:text-lg  font-light'> {aboutInfo.descriptionTwo}</li>

          <h3 className="text-xl md:text-2xl  font-bold">{aboutInfo.descriptionInfosTree}  </h3>
          <li className='text-sm md:text-lg  font-light'> {aboutInfo.descriptionInfosTree}</li>
          <h3 className="text-xl md:text-2xl  font-bold">{aboutInfo.descriptionInfosFour}  </h3>
          <li className='text-sm md:text-lg  font-light'> {aboutInfo.descriptionFour}</li>

          <h3 className="text-xl md:text-2xl  font-bold">{aboutInfo.descriptionInfosFive}  </h3>
          <li className='text-sm md:text-lg  font-light'> {aboutInfo.descriptionFive}</li>
          <h3 className="text-xl md:text-2xl  font-bold">{aboutInfo.descriptionInfosSix}  </h3>
          <li className='text-sm md:text-lg  font-light'> {aboutInfo.descriptionSix}</li>

          </ul>
          
         }     
        </div>
        </div>
    <div className="w-full md:py-24">
 
    <PubBanner/>
    </div>
        <TeamBanner/>
    
    </div>
  )
}

export default AboutPage