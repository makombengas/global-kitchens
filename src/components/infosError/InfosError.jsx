import {useTranslations} from 'next-intl'

const InfosError = ({setOpenError}) => {
    const formInfos = useTranslations('Contact')
    return (
      <div className="w-full h-screen fixed bg-[#141517ee] flex justify-center items-center z-40">
              <section className="relative isolate overflow-hidden bg-[#ffffff] px-6 py-24 sm:py-32  lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#ffffff] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="fixed left-[85.5%] md:left-[72.5%] top-[16%] "onClick={() => setOpenError(false)}>
            <h2 className="md:text-4xl text-2xl font-extralignt cursor-pointer tracking-tight">x</h2>
          </div>
          <figure className="md:mt-10 mt-20">
            <blockquote className="text-center font-bold  md:leading-8 text-gray-900  sm:leading-9">
              <p className="text-[.8rem] md:text-lg ">
             {formInfos("formWorkInfosTitle")}
              </p>
              <div className=" mt-2 md:mt-10 md:text-lg  text-[.8rem] font-light">
                <p className="font-bold">
                {formInfos("formWorkInfosSubtitle")}
                </p>
                <p className="mt-5">
                <b className="font-bold">

               {formInfos("formWorkInfosEmailTitle")}
                </b>
                   {" berlioz:2001@yahoo.fr"}
                </p>
                <p className="mt-5">
                <b className="font-bold">

                {formInfos("formWorkInfosPhoneTitle")}
                </b>
                   {" 0176 21 84 71 69"}
                </p>
              </div>
              <p className="mt-10 text-[.8rem] md:text-lg">
             {formInfos("formWorkInfosThanks")}
              </p>
            </blockquote>
            <figcaption className="mt-10">
             
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Bernard Ngassa</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">
                  {formInfos("formWorkInfosJobTitle")}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      </div>
    )
  }
  export default InfosError
  