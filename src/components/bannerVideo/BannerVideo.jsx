import { useTranslations } from "next-intl"
import NavigationLink from './../NavigationLink';


const BannerVideo = () => {
  const infosBanner = useTranslations("BannerVideo")
  const screen = {
    width: "100%",
    height: "60vh",
   
  }
  return (
    <div>
    
      <div className="w-full overflow-hidden relative ">
          <video autoPlay
                muted
                loop
                playsInline width={`${screen.width}`} height={`${screen.height}`} controls={false} preload="none"
                className="w-full  object-cover h-[100vh] "
                
          >
             <source src="/videos/food.mp4" type="video/mp4" />
            <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
            />
            Your browser does not support the video tag.
        </video>
        <div className="bg-gradient-to-t from-[#0000009a] to-[#000000a3] w-screen h-screen flex justify-center flex-col gap-4 md:gap-8 items-center absolute inset-8 left-0 -translate-x-50 ">
          <h1 className="font-bold px-4  text-4xl text-center md:text-7xl text-white">{infosBanner("titre")} </h1>
          <span className="text-[#8EC63F] text-center text-md px-4 md:text-3xl"> {infosBanner("theme")} </span>
          <div className="w-full flex items-center justify-center gap-4 md:gap-10">
            <hr className=" border-1 border-gray-100 w-[6rem] md:w-[23rem] " />
            <i className="at-herb-mix text-4xl  text-gray-100 md:text-8xl"></i>
           
            <hr className=" border-1 border-gray-100 w-[6rem] md:w-[23rem] " />
          </div>
          <p className="w-full text-md px-4 xl:w-[50%] lg:w-[80%] font-light md:text-2xl text-center text-white">{infosBanner("slogan")}</p>
         <div className="w-full flex items-center justify-center gap-8">
         <NavigationLink href={infosBanner("link")}  >
          <button className="bg-[#8EC63F] text-gray-900   transition-bg ease-linear duration-300 uppercase py-2 px-4 hover:bg-gray-100 hover:text-gray-800  md:text-xl mt-5 rounded-full">{infosBanner("btn")}</button>
          </NavigationLink>
          <NavigationLink href={infosBanner("linkContact")}  >
          <button className="border-2 text-gray-100  border-gray-100  transition-bg ease-linear duration-300 uppercase py-2 px-4 hover:bg-gray-100 hover:text-gray-800 md:text-xl mt-5 rounded-full">{infosBanner("btnContact")}</button>
          </NavigationLink>
         </div>
        </div>
      </div>

      
    </div>
  )
}

export default BannerVideo