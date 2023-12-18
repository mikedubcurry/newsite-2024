import Link from "next/link";

export default function RadThings() {
    return (
        <main className="w-8/12 mx-auto flex min-h-screen flex-col justify-between py-24 h-full gap-8">
            <h1 className="font-bold text-6xl">Rad Things</h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-4xl">Platformer</h2>
                    <p className="text-xl">A platform game made with HTML5 Canvas</p>
                    <Link href="/rad-things/platformer">Try it out</Link>
                </div>
            </div>
        </main>
    )
}

