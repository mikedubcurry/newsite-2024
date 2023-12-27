import Link from "next/link";

export default function RadThings() {
    return (
        <main className="w-8/12 mx-auto flex min-h-screen flex-col py-24 h-full gap-8">
            <h1 className="font-bold text-6xl">Rad Things</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-4xl">Platformer</h2>
                    <p className="text-xl">A platform game made with HTML5 Canvas</p>
                    <Link href="/rad-things/platformer">Try it out</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-4xl">XKCD Viewer</h2>
                    <p className="text-xl">A viewer for XKCD comics built with Svelte</p>
                    <Link href="https://youthful-bhabha-79baa1.netlify.app" target="_blank" rel="noreferrer noopener">Try it out</Link>
                </div>
            </div>
            <h2 className="font-bold text-4xl">Setup</h2>
            <p className="">
                I use a System76 Galago Pro running Ubuntu (whatever the latest version is) and enough specs to run all the docker containers I need.
                I use neovim as my editor of choice, but am really not picky about it. As long as there is some sort of LSP integration, I&lsquo;m happy.
                You can find my dotfiles <a className="underline hover:text-purple-400" href="https://github.com/mikedubcurry/dotfiles" target="_blank" rel="noreferrer noopener">here</a>.
            </p>
        </main>
    )
}

