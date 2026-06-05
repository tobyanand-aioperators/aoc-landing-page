import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI Operators Collective - Build Your 6-Figure AI Consulting Business',
  description: 'Learn how to build a 6-figure AI consulting business without quitting your job. Join our 1:1 mentorship program.',
  keywords: ['AI consulting', 'agency', 'business', 'mentorship', 'online course'],
  openGraph: {
    title: 'AI Operators Collective',
    description: 'Build your 6-figure AI consulting business',
    url: 'https://aioperators.co',
    siteName: 'AI Operators Collective',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden w-full`}>
      <body className="bg-black text-white antialiased overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  )
}
