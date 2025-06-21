import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Сообщение 404 - Документация',
  description: 'Документация проекта мобильной игры-детектива "Сообщение 404"',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <script 
          src="https://cdn.jsdelivr.net/npm/mermaid@11.7.0/dist/mermaid.min.js"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
