
"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import Teams from './../../app/[locale]/teams/page';

const TeamBanner = () => {
    const t = useTranslations('Teams');
    const teams = t.raw('team');
   


  return (
    <div className="w-full h-full mt-5 p-3 xl:p-24 flex flex-col gap-8 ">
        <div className="w-full h-full flex flex-col justify-center items-center gap-8 ">
            <h1 className="text-2xl md:text-4xl xl:text-6xl text-center font-bold">
                {t('title')}
            </h1>
            <hr className="border-2 border-[#8EC63F] w-[15rem] md:w-[26rem]" />
            <p className="text-sm md:text-xl font-light text-center">{t('subtitle')} </p>
        </div>
        <div className="w-full mt-8 h-full">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
         
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     
                  
         {teams.map((team, index) => (
     
     <SwiperSlide key={team.id} >
          <Teams teams={teams} id={team.id} name={team.name} image={team.imageAlt} description={team.description} country={team.country} code={team.code} link={team.link} btn={team.btn} />
        </SwiperSlide>
   
      ))}
        
       
  
    
      </Swiper>
        </div>
    </div>
  )
}

export default TeamBanner