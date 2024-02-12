import SkillViewer from "./SkillViewer";

type Resume = {
    name: string,
    title: string,
    website: string,
    mission: string,
    skills: { skill: string; use: string }[],
    experience: {
        title: string,
        company: string,
        startDate: string,
        endDate: string,
        description: string,
    }[],
    certifications: {
        title: string,
        issuer: string,
    }[],
}

async function fetchResume() {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`${apiUrl}/api`)
    const data = await res.json()
    return data as { resume: Resume }
}

export default async function Resume() {
    const resume = {
        name: "Michael Curry",
        title: "Software Engineer",
        website: "mikecurry.dev",
        mission: "I am seeking fulltime employment as a software engineer in the Upstate New York area. I have experience with React, Node, and PHP, but I'm always looking to learn new things. I also work with many services offered by AWS to host applications and have experience migrating applications to the cloud.",
        skills: [
            { skill: "React", use: "Build out re-usable components and take advantage of the large supporting ecosystem." },
            { skill: "Vue", use: "Used mostly as the frontend of choice within Laravel applications." },
            { skill: "Node", use: "Used to build out REST APIs and serverless applications." },
            { skill: "NextJS", use: "Used to build out server side rendered React applications, taking advantage of React's latest feature-set. The framework used for this very site!" },
            { skill: "PHP", use: "Build out server side rendered applications." },
            { skill: "MySQL", use: "Used to store data for applications." },
            { skill: "Laravel", use: "Used to build out server side rendered applications and/or APIs with minimal groundwork required to get started." },
            { skill: "TailwindCSS", use: "Used to style applications in a consitent manner across applications." },
            { skill: "TypeScript", use: "Used to add type safety to JavaScript applications." },
            { skill: "AWS", use: "Used to host applications and services." },
            { skill: "Docker", use: "Used to containerize applications, and simulate a production environment locally." },
        ],
        experience: [
            {
                title: "Developer",
                company: "Troy Web Consulting",
                startDate: "2022-03-22",
                endDate: "2023-12-08",
                description: "Build and maintain full stack web applications for clients using Laravel, Vue, and AWS. Work with BAs, Designers, PMs and clients to determine requirements and design solutions. Notable acheivments include integrating a modern frontend framework with a legacy PHP application, develop and upgrade a serverless application for auditing accessibility, and integrating AI in a mobile web application.",
            },
            {
                title: "JavaScript Application Developer",
                company: "Atlas Copco",
                startDate: "2020-03-18",
                endDate: "2022-03-19",
                description: "Developed and maintained web applications for internal use using SAPUI5. Aided in the design of database schema design.",
            },
        ],
        certifications: [
            {
                title: "AWS Certified Cloud Practitioner",
                issuer: "Amazon Web Services",
            },
            {
                title: "AWS Solutions Architect - Associate",
                issuer: "Amazon Web Services",
            },
        ]
    }

    const formatDate = (date: string) => {
        const [year, month] = date.split('-')
        return `${month}/${year}`
    }

    return (
        <main className="w-8/12 mx-auto flex min-h-screen flex-col justify-between py-24 h-full gap-8">
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-6xl font-bold text-gray-500">Resume</h1>
                <p>Download a PDF version of my resume <a className="underline hover:text-purple-400" href="/resume.pdf" download>here</a>.</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-3xl font-bold text-gray-500">{resume.name}</h2>
                <ul className="ml-4">
                    <li className="mb-2 text-lg">{resume.title}</li>
                    <li className="mb-2"><a href={'http://' + resume.website}>{resume.website}</a></li>
                    <li className="mb-2"><p className="text-lg">{resume.mission}</p></li>
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl text-gray-500">Skills</h2>
                <p className="italic">Select a skill for more details</p>
                <SkillViewer skills={resume.skills} />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl text-gray-500">Experience</h2>
                <ul className="ml-4">
                    {resume.experience.map((job, i) => (
                        <li className="mb-8" key={i}>
                            <h3 className="font-bold text-xl text-gray-500 mb-2">{job.title}<div className="italic text-lg mt-1">{job.company}</div></h3>
                            <p className="mb-2 italic text-gray-300">{formatDate(job.startDate)} - {formatDate(job.endDate)}</p>
                            <p className="leading-7 text-lg">{job.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl text-gray-500">Certifications</h2>
                <ul className="ml-4">
                    {resume.certifications.map((cert, i) => (
                        <li className="mb-4" key={i}>
                            <h3 className="font-bold text-lg text-gray-400">{cert.title}<div className="italic text-sm">{cert.issuer}</div></h3>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
