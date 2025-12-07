"use client"
import "../styles/globals.css"
import Footer from "@/components/Footer"
import NeuralMesh from "@/components/NeuralMesh"
import FloatingDock from "@/components/FloatingDock"
import { Analytics } from "@vercel/analytics/react"
import { Inter_Tight, IBM_Plex_Mono } from 'next/font/google'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body className={`${interTight.variable} ${ibmPlexMono.variable} scan-lines relative`}>
        <NeuralMesh />
        {children}
        <FloatingDock />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
