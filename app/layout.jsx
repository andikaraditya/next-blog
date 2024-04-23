import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lightstation Blog',
  description: 'Blog created by Lightstation',
  icons: {
    icon: "./lighthouse.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
        title={"Lightstation"}
        />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
