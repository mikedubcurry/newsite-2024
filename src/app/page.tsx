import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    const cards = [
        {
            title: "Resume",
            href: "/resume",
            description: "My work experience and skills",
        },
        {
            title: "Projects",
            href: "/projects",
            description: "A collection of cools things I've built",
        },
        {
            title: "Rad Things",
            href: "/rad-things",
            description: "My greatest hits",
        },
    ]
    return (
        <main className="w-8/12 mx-auto flex min-h-screen flex-col justify-between py-24 h-full gap-8">
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-6xl font-bold">Michael Curry</h1>
                <p className="text-3xl">Software Engineer</p>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-stretch gap-6 h-full w-full'>
                {cards.map((card, i) => (
                    <Link href={card.href} key={i} className="group w-full md:w-1/3 rounded-xl border border-gray-300 hover:border-yellow-600 flex flex-col justify-center items-center gap-4 p-8 transition-colors duration-300 ">
                        <h2 className="text-3xl font-bold group-hover:text-purple-400 transition-colors duration-300 group-hover:underline">{card.title}</h2>
                        <p className="text-xl">{card.description}</p>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-3xl font-bold">About</h2>
                <p className=''>
                    I'm a software engineer with a passion for building things.
                    I am currently looking for work in the Upstate New York area.
                    I have experience with React, Node, and PHP, but I'm always looking to learn new things.
                    I'm also a big fan of martial arts like Muay Thai, Brazillian Jiu Jitsu and Capoeira. <a href="https://www.facebook.com/Sukhtimuaythai" target='_blank' rel="noreferrer noopener">Come train with me</a>!
                </p>
            </div>
        </main>
    )
}
