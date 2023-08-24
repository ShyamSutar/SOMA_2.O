import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from "next/font/google"
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'

const font = Nunito({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'SOMA',
  description: 'Seminar Review Implementation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
