import { Figtree } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
})

const description =
  'Unofficial frontend recreation of the clay.com/enterprise landing page, built with Next.js and Tailwind CSS as a portfolio project.'

export const metadata = {
  metadataBase: new URL('https://enterprise-landing-ten.vercel.app'),
  title: 'Clay Enterprise — landing page recreation',
  description,
  // keep the clone of a real company's page out of search results
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Clay Enterprise — landing page recreation',
    description,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-sans font-medium antialiased">{children}</body>
    </html>
  )
}
