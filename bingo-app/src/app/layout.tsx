import './globals.css'
import type { Metadata } from 'next'
import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BIngo!',
  description: 'criado por Pedro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel='icon' href='/favicon.io'/>
      </head>
      <body className={inter.className}>{children}</body>
      <footer> <p> Created By  <a href="https://www.linkedin.com/in/pedroleodev/" target='_blank'>Pedro Leonardo</a> </p> </footer>
    </html>
  )
}
