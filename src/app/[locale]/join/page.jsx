import { useTranslations } from "next-intl"
import TeamBanner from "../../../components/teamBanner/TeamBanner"


const JoinPage = () => {
    const t = useTranslations('Navigation')
  return (
    <div className="">
         <div className="w-full h-[6rem]  md:h-[7rem] text-white bg-[#141517] fixed"/>
         <div className="w-full h-full flex flex-col md:flex-row justify-center gap-4 ">
         <div className="w-full px-8 h-full mt-[7rem]">
             <h1>{t('join')}</h1>
         </div>
         </div>
         <TeamBanner/>
    </div>
  )
}

export default JoinPage