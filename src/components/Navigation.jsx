
"use client"
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import { useEffect, useState } from 'react';
import { Link } from '../navigation';

export default function Navigation() {
   const [openTeam, setOpenTeam] =useState(false);
   const [openMenu, setOpenMenu] =useState(false);
   const [scrollBg, setScrollBg] =useState(false);
  const t = useTranslations('Navigation');
  const logo= useTranslations('logo');
  const closeMenu =()=>{
    setOpenTeam(false)
    setOpenMenu(false);
  }
const handleScroll =()=>{
  if (window.scrollY > 80) {
   setScrollBg(true)
  } else {
    setScrollBg(false) // otherwise
  }
}
  useEffect(()=>{

    window.addEventListener('scroll', handleScroll)
  },[])


  return (
    <div className=" w-full fixed z-50  ">
      <div className=" bg-[#8EC63F] text-gray-900 py-2 px-8 flex justify-between items-center	w-full">
         
         <div className="flex text-[.6rem] md:text-[1rem] gap-2  justify-center items-center">
            <h1 className='hidden md:block'>Address: </h1>
            <p>HumboldtStraße 32, Oldenburg</p>

         </div>
         <div className="flex justify-center items-center ">
         <LocaleSwitcher   />
         </div>
         
      </div>

   
      
      <nav className={`${scrollBg ? "bg-[#141517]" : "bg-transparent"}  w-full flex justify-between items-center py-2 px-8 text-white relative`}>
       <Link onClick={closeMenu} href="/" className='z-10'>
       <div className="flex  flex-col z-10">
           
           <h1 className="xl:text-2xl sm:text-md font-bold text-sm">
            {logo("logoName")}
           </h1>
           <p className='text-[.7rem] font-extralight text-center'>{logo("LogoSlogan")}</p>
         
        </div>
       </Link>
        <div className=" w-[2ren] h-[2ren] text-gray-100 z-10 flex flex-col gap-[.45rem] md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          <hr className={`${openMenu ? 'transition-rotate duration-300  rotate-[-45deg] w-[2rem] text-gray-100 ' : "transition-rotate duration-300  w-[2rem] text-gray-100 "}`}/>
          <hr className={`${openMenu ? 'opacity-0 w-[2rem] text-gray-100 ' : "w-[2rem] text-gray-100 transition-opacity duration-300  "}`}/>
          <hr className={`${openMenu ? 'transition-rotate duration-300  rotate-[45deg] absolute  w-[2rem] text-gray-100 ' : "transition-rotate duration-300 w-[2rem] text-gray-100 "}`}/>
        </div>
      <div className={` ${openMenu ? 'flex justify-center items-center gap-2 absolute  left-0 -translate-x-50 md:static  md:top-0	 top-[0%] bg-[#141517] md:bg-none ' : "hidden md:flex justify-center items-center gap-2 absolute left-0 -translate-x-50 md:static 	 top-[0%] bg-[#8EC63F] md:bg-none "}`}>
            <div className={openMenu ? 'flex items-center gap-6 flex-col md:flex-row justify-center md:justify-end w-screen md:w-[100%] h-[100vh] md:h-0 ' : 'flex items-center gap-6 flex-col md:flex-row justify-center md:justify-end w-screen md:w-[100%] h-[100vh] md:h-0'} >
                <NavigationLink onClick={closeMenu} href="/">{t('home')}</NavigationLink>
                <NavigationLink onClick={closeMenu} href="/about-us">{t('about')}</NavigationLink>
                {/* <NavigationLink onClick={closeMenu} href="/workshops">{t('workshops')}</NavigationLink> */}
                <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => setOpenTeam(!openTeam)} onMouseLeave={() => setOpenTeam(false)} className="uppercase inline-flex w-full justify-center gap-x-1.5  text-gray-100 px-3 py-2 font-semibold text-sm sm:text-sm xl:text-xl shadow-sm  " id="menu-button" aria-expanded="true" aria-haspopup="true">
                  {t("Team")}
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                  {openTeam && <div className={`${scrollBg ? "bg-[#8EC63F] md:bg-[#141517]  h-[6rem] absolute top-10 z-10  w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" : "bg-[#8EC63F] md:bg-[#141517]   h-[6rem] absolute top-10 z-10  w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                      <div className="py-1  items-left flex flex-col gap-4" role="none">
                      <NavigationLink className=" uppercase"  onClick={closeMenu} href="/team">{t('Team')}</NavigationLink>
                      <NavigationLink className=" uppercase py-2 bg-[#8EC63F] " onClick={closeMenu} href="/join">{t('join')}</NavigationLink>
                      
                      </div>
                  </div>}
                </button>
              </div>

  
              </div>
                
                  <NavigationLink onClick={closeMenu} href="/contact">{t('contact')}</NavigationLink>
                
              </div>
           
         </div>
      </nav>
    </div>
  );
}