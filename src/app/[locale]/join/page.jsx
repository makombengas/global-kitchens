import { useTranslations } from "next-intl"
import TeamBanner from "../../../components/teamBanner/TeamBanner"
import Image from "next/image"
import JoinUsForm from './../../../components/joinUsForm/JoinUsForm';


const JoinPage = () => {
    const t = useTranslations('Navigation')
    const join = useTranslations('JoinUs')
    const joinArray = join.raw('pourquoiArray')
    const posteArray = join.raw('posteArray')
   
    

  return (
    <div className="">
      <div className="w-full h-[6rem]  md:h-[7rem] bg-[#141517] text-white md:bg-[#141517] fixed"/>
      <div className='w-full h-full flex justify-center items-center '>
       {/*Header Image */}
      <div className="w-full h-full mt-[6rem] md:mt-[7rem] bg-[#141517a9] ">
        <div className="w-full relative  flex justify-center items-center  h-[10rem]  ">
          <Image src="/images/food.jpg" alt="food" width={1000} height={500} priority required  className="object-cover w-screen   object-top-center h-[10rem] " />
          <div className="w-full flex justify-center items-center text-gray-200 bg-[#1415177f] absolute h-[10rem]">
            
             <h1 className="text-2xl md:text-5xl text-center">{t('join')}</h1>
          
          </div>
        </div>
        
      </div>
    </div>
    <div className="w-full mt-16 flex px-2 flex-col justify-center items-center gap-4 ">
        <h2 className="text-center text-sm text-slate-600   md:text-2xl">
            {join("title")}
        </h2>
        <h1 className="text-center text-md md:text-2xl rounded bg-[#8EC63F] p-4 font-bold text-slate-900">
           {join("subtitle")}
        </h1>
    </div>
    <div className="w-full flex-col gap-16 px-[2rem]  sm:px-[2rem] xl:px-[15rem] mt-8 flex justify-around items-center">
        <div className="w-full flex-col gap-4 p-2 flex justify-center  items-center">
           <h2 className=" text-center md:text-left md:text-4xl font-bold">
              {join("pourquoi")}
           </h2>
           <ul className="flex flex-col gap-2">
            {joinArray.map((item) => (
              <li key={item.id}>
               <b>{item.title}  </b>
               {item.subtitle}
            </li>
            ))}
         
           </ul>
        </div>
        <div className="w-full  flex-col  gap-4 p-2 justify-center  flex  items-center">
          <h2 className=" text-center md:text-left md:text-4xl font-bold">
              {join("poste")}
          </h2>
          <ul className="flex flex-col gap-2" >
          {posteArray.map((item) => (
              <li key={item.id}>
               <b>{item.title}  </b>
               {item.description}
            </li>
            ))}
         
           </ul>
        </div>

        <div className="w-full flex flex-col px-1 md:px-14 items-center">
          <div className="w-full flex justify-center items-center flex-col gap-4 flex-2">
            <h1 className="text-3xl">
             {join("nousJoindre")}
            </h1>
            <p className=" text-sm md:text-lg md:text-center text-left  ">
              {join("nousJoindreText")}
            </p>
          </div>
          <div className="w-full flex-col flex-1 md:flex-row flex justify-center py-14 rounded-xl r mt-14 md:bg-[#8EC63F]  ">
            <div className="md:w-50 pt-14 hidden md:flex justify-center pr-16">
                <Image className="object-cover" src="/images/joinUs.png" alt="join us" style={{width: "500px", height: "500px"}} priority width={500} height={500}/>
            </div>
            <div className=" w-full1">
            <JoinUsForm/>
            </div>
          </div>
        </div>
    </div>
         <TeamBanner/>
    </div>
  )
}

export default JoinPage