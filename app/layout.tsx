import './css/style.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const aspekta = localFont({
  src: [
    {
      path: '../public/fonts/Aspekta-700.woff2',
      weight: '700',
    },       
  ],
  variable: '--font-aspekta',
  display: 'swap',  
})

export const metadata = {
  title: 'ICP Hub UK',
  description: 'The official home for ICP Hub UK - projects, events & announcements.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${aspekta.variable} font-inter antialiased bg-slate-900 text-slate-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
