import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Sponsor = () => {
    const sponsor = useTranslations('Sponsors')
  return (
    <div>
    <hr className='border-1 border-gray-300' />
        <div className="w-full mx-auto bg-gray-100 text-gray-800 py-16 px-5 ">
    <div className="flex flex-col justify-center">

        <div className="text-center items-center flex flex-col gap-8 ">

            <h2 className="font-semibold text-3xl md:text-6xl">
                {sponsor.raw('title')}
            </h2>

            <hr className="border-2 w-[10rem] md:w-[20rem] border-[#8EC63F]" />
            <p className="max-w-lg mx-auto mt-2 text-sm md:text-xl font-light text-gray-500">
               {sponsor.raw('subtitle')}
            </p>


        </div>


        <div className="flex flex-wrap items-center justify-center gap-10  md:justify-around mt-8">


            <div className="text-gray-400 ">
              <Image className='w-[9.375rem] md:w-[12rem] object-cover'  src={(sponsor('companyOne'))} width={200} height={100} alt="Sponsor" />
            </div>


            <div className="text-gray-400 ">
            <div className="text-gray-400 ">
              <Image className='w-[9.375rem] md:w-[16rem] object-cover'   src={(sponsor('companyTwo'))} width={200} height={100} alt="Sponsor" />
            </div>
            </div>


            <div className="text-gray-400 ">
              <Image className='w-[9.375rem] md:w-[12rem] object-cover'   src={(sponsor('companyThree'))} width={200} height={100} alt="Sponsor" />
            </div>


            <div className="text-gray-400 ">
              <Image className='w-[9.375rem] md:w-[12rem] object-cover'   src={(sponsor('companyFour'))} width={200} height={100} alt="Sponsor" />
            </div>


           

        </div>

    </div>

</div>
    </div>
  )
}

export default Sponsor