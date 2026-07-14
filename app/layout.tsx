import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Anton,
  Great_Vibes,
  Poppins,
} from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const anton = Anton({
  weight: '400',
  variable: '--font-anton',
  subsets: ['latin'],
})

const greatVibes = Great_Vibes({
  weight: '400',
  variable: '--font-great-vibes',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['400', '700'],
  variable: '--next-font-poppins',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Antoine Blanco | Coaching Sportif',
  description:
    'Les 3 choses à faire dès maintenant pour perdre du poids durablement et obtenir un corps athlétique.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${greatVibes.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
