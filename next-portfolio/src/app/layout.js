import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '포트폴리오 사이트 만들기',
  description: 'next-js를 기반으로 만들어보는 포트폴리오 사이트입니다',
  keywords: ['포트폴리오', 'portfolio', 'next.js'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
