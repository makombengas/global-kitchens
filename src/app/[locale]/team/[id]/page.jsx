"use client"

import Image from "next/image";
import PubBanner from './../../../../components/pubBanner/PubBanner';






const CountryPage = (searchParams) => {
    
    const data = searchParams.searchParams;
    console.log(searchParams)

 
  return (
    <div>
      
       <div className="w-full h-[6rem]  md:h-[7rem] text-white bg-[#141517] fixed"/>
          
       <div className="w-full h-full p-0 pt-24  ">
                
            <div className="w-full h-full flex flex-col md:flex-row justify-center   gap-4 ">
                <div className=" h-full w-full md:w-[40rem] ">
                  { data.image && <Image src={data.image} alt="team" width={500} height={500} style={{width: "100%", height: "100%"}} priority required  className="object-cover w-full  object-top-center h-[17rem] md:h-screen" />}
                </div> 
                <div className="w-full h-full p-4">
                    <div className="w-full h-full py-8 md:mt-8">
                    <h1 className="text-3xl md:text-5xl font-bold">{data.name}</h1>
                   <div className="w-full h-full flex items-center gap-4 mt-5">
                   <h1 className="text-sm md:text-2xl font-bold text-[#8EC63F]">{data.country}</h1>
                   <span className={data.code} ></span>
                   </div>
                    </div>
                    <p className="text-sm md:text-lg font-light">{data.description}</p> 
                </div> 
            </div>
       </div>
       <PubBanner/>
    </div>
  )
}

export default CountryPage