import Image from 'next/image'
import Link from 'next/link'
import AfterGlow from './AfterGlow'
import TouchTrace from './TouchTrace'

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
            title: "Github",
            href: "https://github.com/mikedubcurry",
            description: "My Github profile",
            newTab: true
        },
    ]
    return (
        <main className="md:w-8/12 mx-4 md:mx-auto flex  flex-col justify-between py-24 h-full gap-12 md:gap-10">
            <div style={{ viewTransitionName: 'hero' }} className="flex items-center gap-4">
                <div className='flex flex-col justify-center gap-4'>
                    <div className='flex items-center gap-4'>
                        <Image src='/insta.jpg' alt="an action shot of me doing a kickflip on a skateboard" width={100} height={100} className='rounded-full' />
                        <h1 className="text-6xl font-bold">Michael Curry</h1>
                    </div>
                    <p className="text-3xl text-left self-start">Software Engineer</p>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-stretch gap-6 h-full w-full'>
                {cards.map((card, i) => (
                    <Link href={card.href} key={i} target={card.newTab ? '_blank' : ''} className="group w-full md:w-1/3 rounded-xl border border-gray-300 hover:border-yellow-600 flex flex-col justify-center items-center gap-4 p-8 transition-all duration-300 hover:bg-blue-900 hover:scale-[103%] text-center">
                        <h2 className="text-gray-500 text-3xl font-bold group-hover:text-purple-400 transition-colors duration-300 group-hover:underline">{card.title}</h2>
                        <p className="text-xl text-copy-light group-hover:text-white transition-colors ">{card.description}</p>
                    </Link>
                ))}
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className="text-gray-400 text-3xl font-bold">About</h2>
                <div className="flex flex-col justify-center gap-8">
                    <p className='leading-8 mb-2 text-lg text-copy'>
                        I&lsquo;m a software engineer with a passion for building things.
                        I am currently looking for work in the Upstate New York area.
                        I have experience with React, Node, and PHP, but I&lsquo;m always looking to learn new things.
                    </p>
                    <p className='leading-8 mb-2 text-lg text-copy'>
                        I&lsquo;m also a big fan of martial arts like Muay Thai, Brazillian Jiu Jitsu and Capoeira. <a className='transition-colors underline hover:text-purple-400' href="https://www.facebook.com/Sukhtimuaythai" target='_blank' rel="noreferrer noopener">Come train with me</a>!
                        I also sometimes skateboard, and have maintained the ability to ollie since I was 12. I&lsquo;m sometimes able to kickflip, but I haven&lsquo;t tried it since it got cold out.
                    </p>
                    <p className='leading-8 mb-2 text-lg text-copy'>
                        When I&lsquo;m not coding or training, I&lsquo;m probably spending time with my family, or playing guitar with my friends in our band, Mud Kricket.
                        We usually get together once a week and jam out for a few hours playing mostly metal-sounding stuff.
                    </p>
                </div>
            </div>
        </main >
    )
}
