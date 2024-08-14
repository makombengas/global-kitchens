import { useTranslations } from "next-intl"
import Image from "next/image"
import NavigationLink from "../NavigationLink"


const AboutBanner = () => {
    const about = useTranslations('Navigation')
    const aboutBanner = useTranslations('AboutBanner')
  return (
    <div className="bg-[#8EC63F]  md:bg-transparent py-8 p-3 xl:p-28 w-full flex justify-center items-center flex-col sm:flex-row h-full flex-wrap gap-8">
    <div className=" md:w-[40%] p-4 md:p-0 md:bg-transparent rounded md:rounded-none flex-2 flex justify-center items-center md:items-start  flex-col gap-6">
        <span className="text-gray-100 md:text-[#8EC63F] uppercase text-sm md:text-lg ">
            {about('about')} 
        </span>
        <h1 className=" text-xl md:text-4xl text-center md:text-left leading-10 capitalize font-bold "> {aboutBanner('aboutTitle')}</h1>
        <p className="md:text-xl text-center md:text-left  font-light  ">{aboutBanner('aboutSubtitle')}</p>
       <NavigationLink href={aboutBanner('aboutLink')} >
       <button className=" bg-[#31323a] md:bg-[#8EC63F] transition-bg ease-linear duration-300 uppercase py-2 px-4 hover:bg-gray-100 hover:md:bg-[#141517]   hover:md:text-gray-100 hover:text-[#8EC63F] text-gray-100 md:text-gray-900 md:text-xl mt-5 rounded-full">{aboutBanner('aboutBtn')}</button>
       </NavigationLink>
    </div>
    <div className="fex-2 flex w-full md:w-[50%] items-start  justify-center ">
        <Image className="object-cover object-right-top w-full md:w-[50vw] h-[55vh]  md:rounded-full" src="/images/pizza.jpg" alt="about" priority width={500} height={500}  />
    </div>     
    </div>
  )
}

export default AboutBanner