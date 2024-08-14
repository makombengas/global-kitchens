import Image from "next/image"
import NavigationLink from "../NavigationLink"
import { useTranslations } from "next-intl"


const PubBanner = () => {
    const pubBanner = useTranslations("PubBanner")
  return (
   <div className="h-[60rem]  md:h-[60vh] overflow-hidden">
         <div className="relative overflow-hidden bg-auto bg-no-repeat bg-center   w-full h-full  ">
           <Image className="object-cover object-top-center w-full h-full md:h-[60vh]  " src="/images/foodSchool.jpg" alt="about" priority width={500} height={500}  />
            <div className="bg-[#223802bc] pt-[5rem] pb-[5rem] h-full px-4  md:px-8 xl:px-[10rem] flex-col md:flex-row md:h-full flex justify-center items-center w-full text-gray-50 absolute inset-0 gap-8">
                <div className="flex flex-col w-full  mb:flex-1 gap-8  md:w-[60%] justify-center items-center md:items-baseline   h-full">
                    <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start"> {pubBanner("pubTitle")}</h1>
                    <hr className="border-2 border-[#8EC63F] w-[15rem] " />
                    <p className="text-sm md:text-xl font-light text-center md:text-start"> {pubBanner("pubSubtitle")}</p>
                </div>
                <div className="flex flex-col gap-6 w-full md:w-[60%] p-4 md:p-8 lg:flex-2  xl:flex-1 4xl:flex-1 rounded justify-center   h-full md:h-[40rem] bg-[#141517] ">
                    <div className="w-full h-full justify-center gap-8 md:gap-4 xl:gap-6 flex flex-col">
                        <span className="text-[#8EC63F] text-center md:text-start">
                            {pubBanner("pubBlackProgram")}
                        </span>
                        <h1 className="text-sm md:text-xl  xl:text-3xl text-center md:text-start">
                       {pubBanner("pubBlackSlogan")}
                        </h1>
                        <p className="text-sm md:text-md  xl:text-lg font-light text-center md:text-start">
                        {pubBanner("pubBlackSubtitle")}
                        </p>
                        <div className="w-full">
                        <NavigationLink href={pubBanner("pubLink")}  >
                        <button className=" w-full bg-[#8EC63F] transition-bg ease-linear duration-300 uppercase py-2 px-4 hover:bg-gray-100 hover:text-[#8EC63F] text-gray-900 text-sm md:text-xl mt-5 rounded-full"> {pubBanner("pubBtn")}</button>
                        </NavigationLink>
                        </div>
                    </div>
                </div>
            </div>
         </div>
   </div>
  )
}

export default PubBanner