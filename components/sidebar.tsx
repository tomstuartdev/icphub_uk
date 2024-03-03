import Link from 'next/link'
import Image from 'next/image'

import Startup01 from '@/public/images/openchat-icon.png'
import Startup02 from '@/public/images/plug-icon.png'
import Startup03 from '@/public/images/trax-icon.png'
import Startup04 from '@/public/images/cubetopia.png'
import Startup05 from '@/public/images/funded.png'
import Startup06 from '@/public/images/vault.png'
import Startup07 from '@/public/images/pokedstudio.png'
import Startup08 from '@/public/images/canistore.png'
import Startup09 from '@/public/images/nuance.png'
import Startup10 from '@/public/images/toyoworld.png'
import Startup11 from '@/public/images/frontrow.png'
import Startup12 from '@/public/images/bitfinity.png'
import Startup13 from '@/public/images/das.png'

export default function Sidebar() {
  return (
    <aside className="md:w-64 lg:w-80 md:shrink-0 pt-6 pb-12 md:pb-20">
      <div className="md:pl-6 lg:pl-10">
        {/* Sidebar content */}
        <div className="space-y-6">
          {/* Search form */}
          {/* <form>
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="search">
                  Search
                </label>
                <div className="relative flex items-center">
                  <input id="search" type="search" className="form-input py-1 w-full pl-10 rounded-full" />
                  <div className="absolute inset-0 right-auto flex items-center justify-center">
                    <svg className="w-4 h-4 shrink-0 mx-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="fill-slate-600"
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form> */}

          

          {/* Latest Startups */}
          <div>
            <div className="text-xs uppercase text-slate-600 font-semibold mb-4">ICP UK projects</div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup01} alt="Startup 01" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        OpenChat
                      </a>
                    </h3>
                  </div>
                  <a href="https://oc.app/" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup02} alt="Startup 02" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Plug
                      </a>
                    </h3>
                  </div>
                  <a href="https://plugwallet.ooo/" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup03} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        TRAX
                      </a>
                    </h3>
                  </div>
                  <a href="https://trax.so" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup04} alt="Startup 04" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Cubetopia
                      </a>
                    </h3>
                  </div>
                  <a href="https://kqwp7-2yaaa-aaaah-abyna-cai.raw.ic0.app/" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup05} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Funded
                      </a>
                    </h3>
                  </div>
                  <a href="https://funded.app" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup06} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        VaultBet
                      </a>
                    </h3>
                  </div>
                  <a href="https://vault-bet.com" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup07} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        PokedBot
                      </a>
                    </h3>
                  </div>
                  <a href="https://pokedstudio.com" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup08} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Canistore
                      </a>
                    </h3>
                  </div>
                  <a href="https://canistore.io" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup13} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Digital Art Showcase
                      </a>
                    </h3>
                  </div>
                  <a href='https://twitter.com/DigitalArtShow' target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup09} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Nuance
                      </a>
                    </h3>
                  </div>
                  <a href="https://nuance.xyz" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup10} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Toyo World
                      </a>
                    </h3>
                  </div>
                  <a href="https://gi72u-lqaaa-aaaal-ac3ga-cai.raw.icp0.io/" target='_empty' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup11} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        FrontRow
                      </a>
                    </h3>
                  </div>
                  <a href="https://zz255-oqaaa-aaaak-qcwua-cai.icp0.io" target='_blank' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <div className="grow min-w-0 flex items-center mr-2">
                    <Image className="shrink-0 mr-3 w-8" src={Startup12} alt="Startup 03" />
                    <h3 className="truncate text-sm">
                      <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="#0">
                        Bitfinity
                      </a>
                    </h3>
                  </div>
                  <a href='https://bitfinity.network/' target='_blank' className="text-xs text-sky-300 inline-flex font-medium rounded-full text-center px-2 py-0.5 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                    Visit
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* New Discussions */}
          <div>
            <div className="text-xs uppercase text-slate-600 font-semibold mb-4">Job Board</div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center mb-1">
                  <Image className="rounded-full mr-2" src={Startup03} width="16" height="16" alt="User 06" />
                  <div className="text-xs">
                    <a className="font-medium text-slate-300 hover:text-slate-100 transition duration-150 ease-in-out" href="#0">
                      TRAX
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="/posts/1">
                    Creative Director
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">£40k-£60k</span> · <span className="text-slate-500">London</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image className="rounded-full mr-2" src={Startup06} width="16" height="16" alt="User 09" />
                  <div className="text-xs">
                    <a className="font-medium text-slate-300 hover:text-slate-100 transition duration-150 ease-in-out" href="#0">
                      Vault Bet
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="/posts/1">
                    Frontend Developer
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">£50k+</span> · <span className="text-slate-500">London · Remote</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image className="rounded-full mr-2" src={Startup02} width="16" height="16" alt="User 05" />
                  <div className="text-xs">
                    <a className="font-medium text-slate-300 hover:text-slate-100 transition duration-150 ease-in-out" href="#0">
                      Plug
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="/posts/1">
                    Head of Marketing
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">£60k-75k</span> · <span className="text-slate-500">London</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Popular Posts */}
          <div>
            <div className="text-xs uppercase text-slate-600 font-semibold mb-4">Popular Posts</div>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center mb-1">
                  <Image className="rounded-full mr-2" src={Startup09} width="16" height="16" alt="User 06" />
                  <div className="text-xs">
                    <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                      MaryLync77
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="/posts/1">
                    How do you decide and keep focus on the <em className="italic">"right"</em> things?
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> · <span className="text-slate-500">14 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image className="rounded-full mr-2" src={Startup09} width="16" height="16" alt="User 09" />
                  <div className="text-xs">
                    <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                      Zakaria_C
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="/posts/1">
                    How do you approach building a team for your startup?
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">22 Feb</span> · <span className="text-slate-500">44 Comments</span>
                </div>
              </li>
              <li>
                <div className="flex items-center mb-1">
                  <Image className="rounded-full mr-2" src={Startup09} width="16" height="16" alt="User 01" />
                  <div className="text-xs">
                    <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                      IndieMark
                    </a>
                  </div>
                </div>
                <h3 className="text-sm mb-1">
                  <Link className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="/posts/1">
                    The 5 big lessons I've learnt from Geeks and Experts
                  </Link>
                </h3>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-500">20 Feb</span> · <span className="text-slate-500">19 Comments</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="-rotate-1">
            <div className="relative p-5 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
              <div
                className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                aria-hidden="true"
              />
              <div className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 via-sky-300 to-slate-200 mb-3">
                Sign up to the ICP UK newsletter.
              </div>
              {/* Form */}
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="newsletter">
                  Email
                </label>
                <form className="relative flex items-center max-w-xs mx-auto">
                  <input id="newsletter" type="email" className="form-input py-1.5 w-full pr-10 rounded-full" placeholder="Your email" />
                  <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                    <svg className="w-3 h-3 fill-current text-sky-300 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </button>
                </form>
                {/* Success message */}
                {/* <p className="mt-2 text-slate-200 text-center text-xs">Thanks for subscribing!</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}