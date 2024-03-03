import Image from 'next/image'
import Illustration from '@/public/images/hero-illustration.svg'
import HeroImage from '@/public/images/hero-image.png'
import Client01 from '@/public/images/openchat.png'
import Client02 from '@/public/images/plug.png'
import Client03 from '@/public/images/trax.png'
import Link from 'next/link'
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 bg-opacity-60 pointer-events-none -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none " priority alt="Hero Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-48 pb-8 md:pt-36 md:pb-16">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[48rem]">
              {/* Copy */}
              <div className="md:pr-32">
                <h1 className="h2 text-7xl sm:text-4xl font-aspekta bg-clip-text text-transparent bg-gradient-to-tl from-indigo-500 via-sky-300 to-slate-100 pb-6 leading-[3rem] mt-2 sm:leading-[1.5rem]">
                  <span className='display sm:hidden'>ICP Hub</span><span className='hidden sm:block'>Internet Computer Hub</span> <br/><span className='text-4xl leading-[1rem]'>United Kingdom</span>
                </h1>
                <p className="text-lg text-slate-300 mb-4 sm:mb-8">
                  The <b>official home</b> for all ICP Hub UK projects, events and announcements.
                </p>
              </div>
              {/* Logos */}
              <div className="md:flex flex-wrap items-center md:space-x-5 text-center">
                <div>
                <ul className="flex grow justify-center flex-wrap items-center">
                <li className="ml-3">
                    <Link className="btn-sm text-slate-300 bg-slate-900/50 border-t border-t-slate-400 border-b border-b-slate-800 hover:bg-sky-600/20 cursor-pointer w-full" href="/join">
                      I&apos;m a project
                    </Link>
                  </li>
                  
                  <li className="ml-3">
                    <Link className="btn-sm text-slate-300 bg-sky-900/50 border-t border-t-sky-400 border-b border-b-sky-800 hover:bg-sky-600/20 cursor-pointer w-full" href="/join">
                      I&apos;m an enterprise
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-medium text-slate-300 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                      href="/signin"
                    >
                      I&apos;m a policy maker
                    </Link>
                  </li>
                  
                </ul>     
                </div>
                {/* Label */}
               {/*  <div className="mb-4 md:mb-0">
                  <div className="text-sm font-light text-slate-300 whitespace-nowrap">Catch up with founders from</div>
                </div>
                <div className="inline-flex flex-wrap items-center">
                  <div className="py-2 pr-3 w-40">
                    <Image src={Client01} alt="Client 01" />
                  </div>
                  <div className="py-2 px-3 w-24">
                    <Image src={Client02} alt="Client 02" />
                  </div>
                  <div className="py-2 px-3 w-32">
                    <Image src={Client03} alt="Client 03" />
                  </div>
                </div> */}
              </div>

              {/* Image */}
              <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[42rem] lg:left-[48rem] mt-12 md:mt-0 md:top-1/2 md:-translate-y-1/2">
                <Image src={HeroImage} className="md:max-w-none mx-auto" width="332" height="298" alt="Hero Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}