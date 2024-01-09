'use client';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname()
    const links = [
        { href: '/', label: 'Home' },
        { href: '/resume', label: 'Resume' },
        { href: '/projects', label: 'Projects' },
//        { href: '/rad-things', label: 'Rad Things' },
    ]
    return (
        <nav className='grid grid-cols-3 py-6 w-8/12 mx-auto'>
            <div className="flex items-center gap-4" style={{viewTransitionName: 'hero'}}>
                {pathname !== '/' && (
                    < >
                        <Image src='/insta.jpg' alt="an action shot of me doing a kickflip on a skateboard" width={50} height={50} className='rounded-full' />
                        <div className='flex flex-col justify-center'>
                            <h1 className="text-xl font-bold">Michael Curry</h1>
                            <p className="text-lg text-right md:text-left">Software Engineer</p>
                        </div>
                    </>
                )}
            </div>
            {/** checks if current pathname is subroute of a link **/}
            <div className='flex items-center justify-end gap-4 py-4 col-span-2'>
                {links.map(({ href, label }) => (
                    < Link key={href} href={href} className={pathname === href || (pathname.split('/')[1] === href.slice(1)) ? 'font-bold text-yellow-100' : ''}>
                        {label}
                    </Link>
                ))
                }
            </div>
        </nav >
    )
}
