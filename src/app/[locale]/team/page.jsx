
import { useTranslations } from 'next-intl';
import PubBanner from '../../../components/pubBanner/PubBanner';
import Image from 'next/image';
import TeamBanner from './../../../components/teamBanner/TeamBanner';


const TeamPage = () => {

  const team = useTranslations('Teams')
  const mail = useTranslations('Email')
  return (
    <div className="">
     <div className="w-full h-[6rem]  md:h-[7rem] bg-[#141517] text-white md:bg-[#141517] fixed"/>
      <div className='w-full h-full flex justify-center items-center '>
       {/*Header Image */}
      <div className="w-full h-full mt-[6rem] md:mt-[7rem] bg-[#141517a9] ">
        <div className="w-full relative  flex justify-center items-center  h-[10rem]  ">
          <Image src="/images/foodTeam.jpg" alt="foodTeam" width={1000} height={500} priority required  className="object-cover w-screen  object-right-bottom h-[10rem] " />
          <div className="w-full flex justify-center items-center text-gray-200 bg-[#1415177f] absolute h-[10rem]">
            
             <h1 className="text-2xl md:text-5xl text-center">{team('teamTitle')}</h1>
          
          </div>
        </div>
      </div>
    </div>
        <div className="w-full mt-8 md:mt-16 px-[2rem] md:px-[7rem] xl:px-[15rem]">
          <p className="text-center text-sm text-slate-600  md:text-xl">
             {team("description")}
          </p>
          
        </div>
    <TeamBanner/>
     <PubBanner/>
    </div>
  )
}

export default TeamPage