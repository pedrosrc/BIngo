import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BIngo!',
  description: 'Se divirta com seus amigos com sorteador de Bingo!',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'BIngo!',
    description: 'Se divirta com seus amigos com sorteador de Bingo!',
    url: 'https://b-ingo.vercel.app/',
    images: [
      {
        url: 'https://b-ingo.vercel.app/assets/bingo-cover.jpg',
        width: 800,
        height: 600,
      },
    ],
    siteName: 'BIngo!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIngo!',
    description: 'Se divirta com seus amigos com sorteador de Bingo!',
    images: ['https://b-ingo.vercel.app/assets/bingo-cover.jpg'],
  },
  other: {
    'itemprop:name': 'BIngo!',
    'itemprop:url': 'https://b-ingo.vercel.app/',
    'itemprop:description': 'Se divirta com seus amigos com sorteador de Bingo!',
    'itemprop:image': 'https://b-ingo.vercel.app/assets/bingo-cover.jpg',
  },
};

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
      <body className='bg-gradient-to-b from-blue-900 to-blue-700 overflow-x-hidden'>{children}</body>
      
    </html>
  )
}
