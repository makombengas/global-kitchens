import { useTranslations } from "next-intl";
import Link from "next/link"

import  NewsLetter  from "../newsletter/Newsletter";

import dynamic from 'next/dynamic';
import Sponsor from "../sponsor/Sponsor";

const MapWithNoSSR = dynamic(() => import('../contactBanner/ContactBanner'), {
  ssr: false
});

const Footer = ({closeMenu}) => {
    const nav = useTranslations('Navigation');
    const logo= useTranslations('logo'); 
    const aboutBanner = useTranslations('AboutBanner');
    const t= useTranslations('Teams');
    const teams = t.raw('team');
    const markers = [
      { lat:  53.1488926, lng: 8.2088571, popupContent: "Oldenburg- Humboldtstraße" },
      // { lat: 51.5074, lng: -0.1278, popupContent: "Londres" },
      // { lat: 40.7128, lng: -74.0060, popupContent: "New York" },
    ];
  return (
  <div className="w-full h-full text-white bg-[#141517] ">
   <NewsLetter/>

   {/* <Sponsor/> */}

  {/* map component Leaflet */}

  <div className=" mx-auto w-full  ">
      <div className="border border-gray-300 rounded-none  overflow-hidden">
      <MapWithNoSSR 
      
          center={[53.1488926, 8.2088571]} 
          zoom={15} 
          markers={markers}
        />
      </div>

    </div>
     
      <div className="w-full h-full flex gap-8 md:gap-16 justify-between px-8 py-8 md:py-16 flex-col md:flex-row  flex-wrap ">
    
    <div className=" flex flex-col justify-center items-center md:items-start md:justify-start gap-4 flex-1">
    <Link onClick={closeMenu} href="/" className='z-10'>
       <div className=":flex  flex-col z-10">
           
           <h1 className="md:text-xl uppercase  text-xl font-bold">
            {logo("logoName")}
           </h1>
           <p className='text-[.7rem] text-center md:text-left font-extralight  '>{logo("LogoSlogan")}</p>
         
        </div>
       </Link>
       <div className="">
       <p className="text-sm text-center md:text-left  font-extralight text-gray-200  ">{aboutBanner('aboutSubtitle')}</p>
       </div>
    </div>
    <div className=" flex flex-col justify-center items-center md:justify-start md:items-start gap-8 flex-1">
        <h1 className="md:text-xl uppercase  text-xl font-bold ">
           {nav('about')}
        </h1>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 w-full h-full text-sm text-center md:text-left  font-light">
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu} href="/">{nav('home')}</Link>
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu} href="/about-us">{nav('about')}</Link>
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu} href="/workshops">{nav('workshops')}</Link>
        <Link className="hover:text-[#8EC63F]"   onClick={closeMenu} href="/team">{nav('Team')}</Link>
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu} href="/join">{nav('join')}</Link>
        </div>
    </div>
    <div className=" flex flex-col justify-center items-center md:justify-start md:items-start gap-8 flex-1">
        <h1 className="md:text-xl uppercase  text-xl font-bold">
           {nav('Team')}
        </h1>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 w-full h-full text-sm text-center md:text-left  font-light">
          {
            teams.map((team, index) => (
              <Link className="hover:text-[#8EC63F]" key={team.id} onClick={closeMenu} href={
                {
                  pathname: `${team.link}/:id?id=${team.id}}}`,
                  
                  query: {
                    id: team.id,
                    name: team.name,
                    image: team.imageAlt,
                    country: team.country,
                    code: team.code,
                    description: team.description,
                    link: team.link,
                    btn: team.btn
                  }
                }
              }>{team.name}</Link>
            ))
          }
        </div>
    </div>
    <div className=" flex flex-col justify-center items-center md:justify-start md:items-start gap-8 flex-1">
        <h1 className="md:text-xl uppercase  text-xl font-bold">
           {nav('contact')}
        </h1>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 w-full h-full text-sm text-center md:text-left  font-light">
        <div className="flex flex-col gap-2">
      
        <p className="text-sm">
           Humboldtstraße 32, 26121 Oldenburg,  {logo('country')}	
        </p>
       
        <p className="text-sm">
           Tel:  +49 176 21 84 71 69
        </p>
       
        <div className="flex items-center justify-center md:justify-start mt-8 text-xl gap-6">
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu} href="https://www.facebook.com" target="_blank" ><i className="at-facebook cursor-pointer"></i></Link>
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu} href="https://www.youtube.com" target="_blank"><i className="at-youtube cursor-pointer"></i></Link>
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu}  href="https://www.instagram.com" target="_blank"><i className="at-instagram cursor-pointer"></i></Link>
        <Link className="hover:text-[#8EC63F]" onClick={closeMenu}  href="https://www.linkedin.com" target="_blank"><i className="at-linkedin cursor-pointer"></i></Link>
            
           
        </div>
        </div>
        </div>
    </div>

   <div className="w-full flex flex-col justify-center items-center gap-8">
   <hr className="border-[.01rem] border-none h-[.015rem] bg-gray-400 w-full" />
   <p className="text-xs  md:text-sm text-center mt-4 text-gray-200">© 2024 {logo('logoName')} - {logo('footerInfo')}</p>
   </div>
    </div>

  </div>
  )
}

export default Footer