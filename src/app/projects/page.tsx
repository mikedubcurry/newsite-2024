export default function Projects() {
    return (
        <main className="w-8/12 mx-auto flex flex-col min-h-screen py-24 h-full gap-8">
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-6xl font-bold">Projects</h1>
            </div>
            <section className="">
                <h2 className="text-4xl font-bold mb-8">Laravel</h2>
                <ul className="list-inside">
                    <li className="mb-4">
                        <a href="https://github.com/mikedubcurry/martialarts" className="text-blue-500 hover:underline" target="_blank" rel="referer noopener">Martial Arts</a>
                        <p className="text-gray-500">A gym session tracking app for different gyms and training disciplines. Laravel, MySQL, React, and TailwindCSS.</p>
                        <a href="https://example.com" className="text-blue-500 hover:underline">Try it out!</a>
                    </li>
                </ul>

                <h2 className="text-4xl font-bold mb-8">AI/ML</h2>
                <ul className="list-inside">
                    <li className="mb-4">
                        <a href="https://github.com/mikedubcurry/computer-vision" className="text-blue-500 hover:underline" target="_blank" rel="referer noopener">Computer Vision</a>
                        <p className="text-gray-500">A browser app demonstrating the use of tensorflow.js to detect hand-drawn numbers, using Vite to serve the app.</p>
                    </li>
                </ul>

                <h2 className="text-4xl font-bold mb-8">Serverless</h2>
                <ul className="list-inside">
                    <li className="mb-4">
                        <a href="https://github.com/mikedubcurry/sst-app" className="text-blue-500 hover:underline" target="_blank" rel="referer noopener">Serverless Stack</a>
                        <p className="text-gray-500">A serverless stack app using SST, Lambda functions, Cognito, and DynamoDB.</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}


