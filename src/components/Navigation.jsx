
"use client"
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import { useEffect, useState } from 'react';
import { Link } from '../navigation';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';

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

  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const isActive = pathname === "/join";
  return (
    <div className=" w-full fixed z-50  ">
      <div className=" bg-[#8EC63F] text-gray-900   py-1 px-8 flex justify-between items-center	w-full">
         
         <div className="flex text-[.6rem] md:text-[1rem] gap-2  justify-center items-center">
            <h1 className='hidden md:block font-bold'>{t("adresse")} </h1>
            <p className="font-light">HumboldtStraße 32, Oldenburg</p>

         </div>
         <div className="flex justify-center items-center ">
         <LocaleSwitcher   />
         </div>
         
      </div>

   
      
      <nav className={`${scrollBg ? "bg-[#141517] w-full flex justify-between items-center py-4 leading-6 md:leading-5 md:py-1 px-8" : "bg-transparent"}  w-full flex justify-between items-center py-4 leading-6 md:leading-5 md:py-1 px-8 text-white relative`}>
       <Link onClick={closeMenu} href="/" className='z-10'>
       <div className="flex  flex-col z-10">
           
         <div className="flex items-center gap-2">
         <i className="at-herb-mix text-sm  text-gray-100 md:text-3xl"></i>
         <h1 className="xl:text-2xl sm:text-md font-bold text-sm">
            {logo("logoName")}
           </h1>
         </div>
           <p className='text-[.7rem] hidden md:block font-extralight text-center'>{logo("LogoSlogan")}</p>
         
        </div>
       </Link>
        <div className=" w-[2ren] h-[2ren] text-gray-100 z-10 flex flex-col gap-[.45rem] md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          <hr className={`${openMenu ? 'transition-rotate duration-300  rotate-[-45deg] w-[2rem] text-gray-100 ' : "transition-rotate duration-300  w-[2rem] text-gray-100 "}`}/>
          <hr className={`${openMenu ? 'opacity-0 w-[2rem] text-gray-100 ' : "w-[2rem] text-gray-100 transition-opacity duration-300  "}`}/>
          <hr className={`${openMenu ? 'transition-rotate duration-300  rotate-[45deg] absolute  w-[2rem] text-gray-100 ' : "transition-rotate duration-300 w-[2rem] text-gray-100 "}`}/>
        </div>
      <div className={` ${openMenu ? 'flex justify-center items-center gap-2 absolute  left-0 -translate-x-50 md:static  md:top-0	 top-[0%] bg-[#141517] md:bg-none ' : "hidden md:flex justify-center items-center gap-2 absolute left-0 -translate-x-50 md:static 	 top-[0%] bg-[#8EC63F] md:bg-none "}`}>
            <div className={openMenu ? 'flex items-center  gap-8 flex-col md:flex-row justify-center md:justify-end w-screen md:w-[100%] h-[100vh] md:h-0 ' : 'flex items-center gap-6 flex-col md:flex-row justify-center md:justify-end w-screen md:w-[100%] h-[100vh] md:h-0'} >
                <NavigationLink onClick={closeMenu} href="/">{t('home')}</NavigationLink>
                <NavigationLink onClick={closeMenu} href="/about-us">{t('about')}</NavigationLink>
                <NavigationLink onClick={closeMenu} href="/team">{t('Team')}</NavigationLink>
             
              
                
                  <NavigationLink onClick={closeMenu} href="/contact">{t('contact')}</NavigationLink>
                  {/* <Link aria-current={isActive ? 'page' : undefined}   className={`${isActive ? " hover:border-2 hover:border-[#ffffff] hover:bg-transparent transition-bg duration-300 ease-out hover:text-[#ffffff] uppercase rounded  py-2 px-2 bg-[#8EC63F] text-slate-950 font-bold ":"mt-5 sm:mt-0  hover:border-2 hover:border-[#ffffff] hover:bg-transparent transition-bg duration-300 ease-out text-slate-900 hover:text-[#ffffff] uppercase rounded  py-2 px-2 bg-[#ffffff]  font-bold "}`} onClick={closeMenu} href="/join">{t('join')}</Link> */}
                
              </div>
           
         </div>
      </nav>
    </div>
  );
}