import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function HeaderLogo() {
  return (
    <div className="shrink-0 mr-4">
      {/* Logo */}
      <Link className="block group" href="/" aria-label="Cruip">
        <Image src={Logo} width={120} height={48} priority alt="Community" />
      </Link>
    </div>
  )
}
