'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname()
    const links = [
        { href: '/', label: 'Home' },
        { href: '/resume', label: 'Resume' },
        { href: '/projects', label: 'Projects' },
        { href: '/rad-things', label: 'Rad Things' },
    ]
    return (
        <nav className='flex justify-center gap-6 py-8'>
            {/** checks if current pathname is subroute of a link **/}
            {links.map(({ href, label }) => (
                < Link key={href} href={href} className={pathname === href || (pathname.split('/')[1] === href.slice(1)) ? 'font-bold text-yellow-100' : ''}>
                    {label}
                </Link>
            ))
            }
        </nav >
    )
}
