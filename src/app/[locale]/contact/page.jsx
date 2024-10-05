"use client"
import { useTranslations } from 'next-intl';
import TeamBanner from '../../../components/teamBanner/TeamBanner';
import Image from 'next/image';
import { useState } from 'react';
import InfosError from './../../../components/infosError/InfosError';




const Contact = () => {
  const t = useTranslations('Navigation')
  const contact = useTranslations('Contact')
  const adresse = contact.raw('contactInfos')
  const donné = contact.raw('donnéInfos')
  const horaire = contact.raw('horaireInfos')
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState(null);
  const [openError, setOpenError] = useState(false);
  const[contactError, setContactError] = useState(false);
 
  const handleSubmit = async (e) => {

    
    e.preventDefault();
    if(!name || !email || !message){
      setContactError(true)
      return;
    }
    else{
      setOpenError(true);
      setEmail("");
      setName("");
      setMessage("");
      setContactError(false)
    }

}




  return (
    <div className="">
    {
      openError && <InfosError setOpenError={setOpenError}/>
    }
     <div className="w-full h-[6rem]  md:h-[7rem] bg-[#141517] text-white md:bg-[#141517] fixed"/>
      <div className='w-full h-full flex justify-center items-center '>
       {/*Header Image */}
      <div className="w-full h-full mt-[6rem] md:mt-[7rem] bg-[#141517a9] ">
        <div className="w-full relative  flex justify-center items-center  h-[10rem]  ">
          <Image src="/images/platMix.jpg" alt="platMix" width={1000} height={500} priority required  className="object-cover w-screen   object-top-center h-[10rem] " />
          <div className="w-full flex justify-center items-center text-gray-200 bg-[#1415177f] absolute h-[10rem]">
            
             <h1 className="text-2xl md:text-5xl text-center">{contact('title')}</h1>
          
          </div>
        </div>
        
      </div>
    </div>
    <section className="bg-green-50 dark:bg-slate-800 " id="contact">
    <div className="mx-auto max-w-7xl px-4 py-8  md:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-2">
            <div className="flex flex-col gap-4 mb-2 max-w-3xl md:text-center sm:text-center md:mx-auto md:mb-12">
                
              
                <p className="mx-auto  max-w-3xl text-md md:text-xl text-gray-600 dark:text-slate-400">
                     {contact('subtitle')}
                </p>
            </div>
        </div>
        <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-md md:text-lg text-gray-600 dark:text-slate-400">
                        {contact('formulaireInfos')}
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#8EC63F] text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                    {contact('adresse')}
                                </h3>
                                {adresse.map((item, index) => (
                                    <p key={index} className="text-gray-600 py-1 dark:text-slate-400">
                                      <b>{item.title}</b>   {item.adresse}
                                    </p>
                                ))}
                               
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#8EC63F] text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                {contact('coordonnées')}
                                </h3>
                                {donné.map((item, index) => (
                                    <p key={index} className="text-gray-600 py-1 dark:text-slate-400">
                                      <b>{item.title}</b>   {item.adresse}
                                    </p>
                                ))}
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#8EC63F] text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white"> {contact('horaire')} </h3>
                                {horaire.map((item, index) => (
                                    <p key={index} className="text-gray-600 py-1 dark:text-slate-400">
                                      <b>{item.jour}</b>   {item.heure}
                                    </p>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-2xl font-bold dark:text-white"> {contact('formulaire')} </h2>
                    {/* {isLoading ? 'Loading...' : 'Submit'} */}
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" name="name" value={name}	 autoComplete="given-name" placeholder={contact('nom')}  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"   onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" name="email" value={email} autoComplete="email" placeholder={contact("email")}  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"   onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="message"  cols="30" rows="5" value={message} placeholder={contact("message")}  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"  onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                            {
                                        contactError  && <p className="text-red-500 text-center">
                                        {contact("formError")}
                                        </p>
                                    }
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-[#8EC63F] text-gray-800 px-6 py-3 font-xl rounded-md sm:mb-0" onClick={handleSubmit}>{contact('btn')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  
    <div className='w-full h-full flex justify-center items-center '>

     
    </div>
<hr className="border-1 border-gray-300 w-full " />
<TeamBanner/>
  
    </div>
  )
}

export default Contact