import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Michael Curry - Dev',
    description: 'Portfolio and resume of Michael Curry',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta name="view-transition" content="same-origin" />
            </head>
            <body className={inter.className}>
                <header>
                    <Nav />
                </header>
                {children}
            </body>
        </html>
    )
}
