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
        <main className="md:w-8/12 mx-4 md:mx-auto flex min-h-screen flex-col justify-between py-24 h-full gap-12 md:gap-8">
            <div style={{ viewTransitionName: 'hero' }} className="flex items-center gap-4">
                <Image src='/insta.jpg' alt="an action shot of me doing a kickflip on a skateboard" width={100} height={100} className='rounded-full' />
                <div className='flex flex-col justify-center gap-4'>
                    <h1 className="text-6xl font-bold">Michael Curry</h1>
                    <p className="text-3xl text-right md:text-left">Software Engineer</p>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-stretch gap-6 h-full w-full'>
                {cards.map((card, i) => (
                    <Link href={card.href} key={i} className="group w-full md:w-1/3 rounded-xl border border-gray-300 hover:border-yellow-600 flex flex-col justify-center items-center gap-4 p-8 transition-all duration-300 hover:bg-blue-900 hover:scale-[103%]">
                        <h2 className="text-3xl font-bold group-hover:text-purple-400 transition-colors duration-300 group-hover:underline">{card.title}</h2>
                        <p className="text-xl">{card.description}</p>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-3xl font-bold">About</h2>
                <p className='leading-8 mb-2'>
                    I&lsquo;m a software engineer with a passion for building things.
                    I am currently looking for work in the Upstate New York area.
                    I have experience with React, Node, and PHP, but I&lsquo;m always looking to learn new things.
                    I&lsquo;m also a big fan of martial arts like Muay Thai, Brazillian Jiu Jitsu and Capoeira. <a className='transition-colors underline hover:text-purple-400' href="https://www.facebook.com/Sukhtimuaythai" target='_blank' rel="noreferrer noopener">Come train with me</a>!
                    I also sometimes skateboard, and have maintained the ability to ollie since I was 12. I&lsquo;m sometimes able to kickflip, but I haven&lsquo;t tried it since it got cold out.
                </p>
                <p className='leading-8 mb-2'>
                    When I&lsquo;m not coding or training, I&lsquo;m probably spending time with my family, or playing guitar with my friends in our band, Mud Kricket.
                    We usually get together once a week and jam out for a few hours playing mostly metal-sounding stuff.
                </p>
            </div>
        </main >
    )
}
