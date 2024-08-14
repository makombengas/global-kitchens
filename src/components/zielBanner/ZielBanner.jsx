import { useTranslations } from "next-intl";
import "/node_modules/@vectopus/atlas-icons/style.css";

const ZielBanner = () => {
    const goal = useTranslations('GoalsBanner')
  return (
    <div className="w-full h-full py-16 px-4 xl:p-24  bg-[#141517] text-gray-300">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 h-full w-full  gap-8">
                <div className="flex-1 flex justify-center items-center flex-col gap-6">
                <i  className="at-peace text-6xl md:text-7xl xl:text-8xl  text-[#8EC63F] "></i>
                <h1 className=" text-lg md:text-xl xl:text-2xl text-center font-semibold text-gray-50"> {goal('promote')}</h1>
                <p className=" text-sm md:text-[1rem] text-center">{goal('promoteSlogan')}</p>
                </div>
                <div className="flex-1 flex justify-center items-center flex-col gap-6">
                <i  className="at-carrot  text-6xl md:text-7xl xl:text-8xl  text-[#8EC63F]"></i>
                <h1 className="text-lg md:text-xl xl:text-2xl text-center font-semibold text-gray-50"> {goal('food')}</h1>
                <p className="text-sm md:text-[1rem] text-center">{goal('foodSlogan')}</p>
                </div>
                <div className="flex-1 flex justify-center items-center flex-col gap-6">
                <i  className="at-soup-bowl  text-6xl md:text-7xl xl:text-8xl  text-[#8EC63F]"></i>
                <h1 className="text-lg md:text-xl xl:text-2xl text-center font-semibold text-gray-50 "> {goal('workshops')}</h1>
                <p className="text-sm md:text-[1rem] text-center">{goal('workshopSlogan')}</p>
                </div>
                <div className="flex-1 flex justify-center items-center flex-col gap-6">
                <i  className="at-graduate  text-6xl md:text-7xl xl:text-8xl  text-[#8EC63F]"></i>
                <h1 className="text-lg md:text-xl xl:text-2xl text-center font-semibold text-gray-50"> {goal('education')}</h1>
                <p className="text-sm md:text-[1rem] text-center">{goal('educationSlogan')}</p>
                </div>
          
            
        </div>
    </div>
  )
}

export default ZielBanner