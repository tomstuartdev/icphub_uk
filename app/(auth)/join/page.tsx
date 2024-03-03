import Link from 'next/link'
import Image from 'next/image'
import HeaderLogo from '@/components/ui/header-logo'
import Illustration from '@/public/images/hero-illustration.svg'
import User05 from '@/public/images/luke.png'
import User09 from '@/public/images/nick.png'
import User12 from '@/public/images/tom.png'

export const metadata = {
  title: 'Join - Community',
  description: 'Page description',
}

export default function Join() {
  return (
    <>
      {/* Site header */}
      <header className="absolute w-full bg-slate-900 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            <HeaderLogo />

            <nav className="flex grow">
              <div className="flex grow justify-end flex-wrap items-center">
                <div className="text-sm text-slate-500">
                  Go back to{' '}
                  <Link className="font-medium text-sky-200 hover:text-slate-200 transition duration-150 ease-in-out" href="/">
                    ICP Hub UK
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="grow">
        {/* Pricing section */}
        <section className="relative">
          <div className="absolute inset-0 max-h-[470px] overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 bg-opacity-60 pointer-events-none -z-10" aria-hidden="true" />

            {/* Illustration */}
            <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
              <Image src={Illustration} className="max-w-none" priority alt="Hero Illustration" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-16">
              {/* Page header */}
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="h2 font-aspekta bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 pb-12">
                  Join the official UK Internet Computer community
                </h1>
              </div>

              {/* Pricing table */}
              <div className="max-w-xs mx-auto">
                <div className="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                  <div
                    className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                    aria-hidden="true"
                  />
                  {/* <div className="mb-4">
                    <div className="inline-flex items-baseline bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200">
                      <span className="text-2xl font-medium">£</span>
                      <span className="text-3xl font-bold">0</span>
                    </div>
                    <div className="text-sm text-slate-400">/month - billed yearly</div>
                  </div> */}
                 {/*  <div className="text-sm font-medium text-slate-200 mb-3">Your plan includes:</div> */}
                  <ul className="text-sm text-slate-400 space-y-3 grow mb-4">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Access to ICP UK events</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Support for your project</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Job openings at ecosystem companies</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-teal-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Speak with leading ICP founders</span>
                    </li>
                    
                  </ul>
                  <div>
                    <a className="btn-sm text-white bg-sky-500/20 border-t border-sky-200 border-b border-sky-800 hover:bg-sky-200/20 w-full" href="#0">
                      Join Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-16">
              {/* Boxes */}
              <div className="max-w-xs mx-auto md:max-w-none grid gap-8 md:grid-cols-3">
                {/* Box */}
                <div className="odd:rotate-1 even:-rotate-1">
                  <div className="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                    <div
                      className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                      aria-hidden="true"
                    />
                    <div className="h-full flex flex-col">
                      <div className="grow mb-1">
                        <div className="relative inline-flex">
                          <Image className="rounded-full mb-4" src={User09} width="48" height="48" alt="User 09" />
                          <svg className="absolute top-0 right-0 -mr-3" width="27" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill="#7ED3FC"
                              fillRule="nonzero"
                              d="m.048 15.889 8.092.14L15.305.153l-4.59-.08L.047 15.89Zm11.018.192 8.092.141L26.323.345 21.675.264 11.066 16.08Z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-slate-400 italic">
                          I'm delighted to be leading this community of passionate founders committed to building a decentralised future on ICP!
                        </p>
                      </div>
                      <div>
                        <a className="text-sm font-medium text-sky-500 hover:text-sky-400 transition duration-150 ease-in-out" href="#0">
                          — Nick Myers
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Box */}
                <div className="odd:rotate-1 even:-rotate-1">
                  <div className="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                    <div
                      className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                      aria-hidden="true"
                    />
                    <div className="h-full flex flex-col">
                      <div className="grow mb-1">
                        <div className="relative inline-flex">
                          <Image className="rounded-full mb-4" src={User05} width="48" height="48" alt="User 05" />
                          <svg className="absolute top-0 right-0 -mr-3" width="27" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill="#7ED3FC"
                              fillRule="nonzero"
                              d="m.048 15.889 8.092.14L15.305.153l-4.59-.08L.047 15.89Zm11.018.192 8.092.141L26.323.345 21.675.264 11.066 16.08Z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-slate-400 italic">
                        The UK hub is a melting pot of some the best minds in the ICP ecosystem. I'd recommend any UK based founder to join.
                        </p>
                      </div>
                      <div>
                        <a className="text-sm font-medium text-sky-500 hover:text-sky-400 transition duration-150 ease-in-out" href="#0">
                          — Luke Dugdale
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Box */}
                <div className="odd:rotate-1 even:-rotate-1">
                  <div className="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                    <div
                      className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                      aria-hidden="true"
                    />
                    <div className="h-full flex flex-col">
                      <div className="grow mb-1">
                        <div className="relative inline-flex">
                          <Image className="rounded-full mb-4" src={User12} width="48" height="48" alt="User 12" />
                          <svg className="absolute top-0 right-0 -mr-3" width="27" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill="#7ED3FC"
                              fillRule="nonzero"
                              d="m.048 15.889 8.092.14L15.305.153l-4.59-.08L.047 15.89Zm11.018.192 8.092.141L26.323.345 21.675.264 11.066 16.08Z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-slate-400 italic">
                        The UK hub has helped me from the start of my project through to SNS.
                        </p>
                      </div>
                      <div>
                        <a className="text-sm font-medium text-sky-500 hover:text-sky-400 transition duration-150 ease-in-out" href="#0">
                          — Tom Stuart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
