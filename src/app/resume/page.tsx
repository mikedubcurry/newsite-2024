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
    const res = await fetch('http://localhost:3000/api')
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
                <h1 className="text-6xl font-bold">Resume</h1>
                <p>Download a PDF version of my resume <a className="underline" href="/resume.pdf" download>here</a>.</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-3xl font-bold">{resume.name}</h2>
                <ul className="ml-4">
                    <li className="mb-2">{resume.title}</li>
                    <li className="mb-2"><a href={'http://' + resume.website}>{resume.website}</a></li>
                    <li className="mb-2"><p>{resume.mission}</p></li>
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl">Skills</h2>
                <ul className="list-disc list-inside">
                    {resume.skills.map(({ skill, use }, i) => (
                        <li key={i}><p>{skill}: {use}</p></li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl">Experience</h2>
                <ul className="ml-4">
                    {resume.experience.map((job, i) => (
                        <li className="mb-8" key={i}>
                            <h3 className="font-bold text-xl">{job.title} - {job.company}</h3>
                            <p className="italic">{formatDate(job.startDate)} - {formatDate(job.endDate)}</p>
                            <p className="leading-7">{job.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl">Certifications</h2>
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
