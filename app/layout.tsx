import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TI4 Draft',
  description: 'Generated by create next app',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>
        <header>TI4 Draft</header>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
