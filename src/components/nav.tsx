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
        {links.map(({ href, label }) => (
            <Link key={href} href={href} className={pathname === href ? 'font-bold text-yellow-100' : ''}>
                {label}
            </Link>
        ))}
        </nav>
    )
}
