
import { useTranslations } from 'next-intl';
import PubBanner from '../../../components/pubBanner/PubBanner';

const TeamPage = () => {
  const t = useTranslations('Navigation')
  return (
    <div className="">
        <div className="w-full h-[6rem]  md:h-[7rem] text-white bg-[#141517] fixed"/>
      <div className='w-full h-screen flex justify-center items-center '>

      <div className="w-full px-8 h-full mt-[14rem]">
        <h1>{t('Team')}</h1>

      </div>
    </div>
     <PubBanner/>
    </div>
  )
}

export default TeamPage