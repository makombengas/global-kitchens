
"use client"

import { useTranslations } from "next-intl"

import NavigationLink from './../NavigationLink';


const NotFoundPage = () => {
   
    const notFind = useTranslations('NotFound')
  return (
    <div className="bg-[#8EC63F]  w-full h-screen flex justify-center flex-col gap-6  items-center ">
      <h1 className="text-6xl font-extrabold text-red-600 text-center">
        404
        </h1>
       <h1 className="text-5xl font-bold  text-center">
        {notFind("title")}
        </h1>
        <p className="text-xl text-center">
        {notFind("subtitle")}
        </p>
        <NavigationLink className="text-2xl bg-slate-100 transition-colors duration-150 ease-linear hover:bg-slate-950 hover:text-slate-100 py-2 px-4 rounded"  href={notFind('link')} >{notFind('btn')}</NavigationLink>
     
    </div>
  )
}

export default NotFoundPage