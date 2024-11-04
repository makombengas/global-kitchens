"use client"

import Image from "next/image"
import NavigationLink from "../../../components/NavigationLink"

import { useRouter } from 'next/navigation';
import { useTranslations } from "next-intl";




const Teams = ({id, image, country, code, name, description, link, btn}) => {
  const t = useTranslations('Teams');
  const teams = t.raw('team');
  const dataToSend = {id, image, country, code, name, description, link, btn}


  const findTeamsId = teams.find(teams => teams.id=== 3)
const router = useRouter();
  const { locale, query } = router;
  
 
  

  
  return (
    <div className={`${findTeamsId.id === id ? "bg-[#141517] text-gray-100 hover:text-[#141517] rounded-2xl  shadow-[#00000085] hover:shadow-[#8ec63f51]   shadow-lg hover:border-[#8EC63F] md:hover:bg-gray-100 hover:bg-[#8ec63f29] md:hover:text-gray-800 w-full flex flex-col justify-center items-center h-full px-4 py-8 gap-4  hover:border-2 hover:rounded-2xl hover:transition-bg duration-300 ease-linear " : "w-full flex flex-col  justify-center items-center h-full px-4 py-8 gap-4 hover:border-2 hover:border-[#8EC63F] hover:text-gray-800 hover:rounded-2xl hover:transition-bg duration-300 ease-linear "}`}>
        <div className="w-[10rem] h-[10rem] rounded-full">
            <Image className="object-cover object-center w-full h-full rounded-full" src={image} alt="team" priority width={500} height={500}  />
        </div>
        <div className="w-full flex flex-col justify-center items-center h-full gap-2 ">
          <div className=" flex flex-col justify-center items-center gap-5">
           <div className="flex justify-center items-center gap-4">
              <h1 className="text-sm md:text-xl font-bold   text-[#8EC63F] text-center">{country} </h1>
                <span className={`${code}`} ></span>
           </div>
                <span className="text-md md:text-2xl text-center">
                  {name}
                </span>
              <p className="text-sm md:text-md font-light md:text-left">
               {description.slice(0, 147)}...
              </p>
          </div>
          <div className="flex justify-center items-center">
            <NavigationLink  href={ {
              pathname: `/${link}/${name}`,
              locale: locale,
              query:query,
              query: {
                ...dataToSend,
               locale: locale
              }
            }
               } 

            
            className="bg-[#8EC63F]  transition-bg ease-linear hover:border hover:border-[#8EC63F] duration-300 uppercase py-2 px-4 hover:bg-gray-100 hover:text-[#8EC63F] text-gray-900 md:text-md mt-5 rounded-full">{btn}</NavigationLink>
          </div>
        </div>
    </div>
  )
}

export default Teams