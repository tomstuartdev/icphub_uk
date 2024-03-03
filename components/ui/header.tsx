import Link from 'next/link'
import HeaderLogo from '@/components/ui/header-logo'

export default function Header() {
  return (
    <header className="absolute w-full bg-slate-900 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          <HeaderLogo />

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  className="text-sm font-medium text-slate-300 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/signin"
                >
                  Contact us
                </Link>
              </li>
              <li className="ml-3">
                <Link className="btn-sm text-slate-300 bg-sky-500/10 border-t border-t-sky-400 border-b border-b-sky-800 hover:bg-sky-600/20 cursor-pointer w-full" href="/join">
                  Join ICP Hub UK
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
