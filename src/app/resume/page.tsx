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
    const { resume } = await fetchResume()

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
                            <h3 className="font-bold text-xl text-gray-500">{job.title} - {job.company}</h3>
                            <p className="italic text-gray-300">{formatDate(job.startDate)} - {formatDate(job.endDate)}</p>
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
                            <h3>{cert.title} ~ {cert.issuer}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
