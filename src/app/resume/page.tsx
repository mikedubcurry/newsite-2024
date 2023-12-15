export default function Resume() {
    const resume = {
        name: "Michael Curry",
        title: "Software Engineer",
        email: "michaelcurry95@gmail.com",
        phone: "518-419-5294",
        website: "michaelcurry.dev",
        mission: "I am seeking fulltime employment as a software engineer in the Upstate New York area. I have experience with React, Node, and PHP, but I'm always looking to learn new things.",
        skills: [
            "React",
            "Node",
            "PHP",
            "MySQL",
            "Laravel",
            "TailwindCSS",
            "NextJS",
            "TypeScript",
            "AWS",
            "Docker",
        ],
        experience: [
            {
                title: "Developer",
                company: "Troy Web Consulting",
                startDate: "2022-03-22",
                endDate: "2023-12-08",
                description: "Build and maintain full stack web applications for clients using Laravel, Vue, and AWS. Work with clients to determine requirements and design solutions.",
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
    return (
        <main className="w-8/12 mx-auto flex min-h-screen flex-col justify-between py-24 h-full gap-8">
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-4xl font-bold">Resume</h1>
                <p>Download a PDF version of my resume <a className="underline" href="/resume.pdf" download>here</a>.</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-3xl font-bold">{resume.name}</h2>
                <ul className="list-disc list-inside">
                    <li>{resume.title}</li>
                    <li>{resume.website}</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2>Skills</h2>
                <ul className="list-disc list-inside">
                    {resume.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2>Experience</h2>
                <ul className="list-disc list-inside">
                    {resume.experience.map((job, i) => (
                        <li key={i}>
                            <h3>{job.title} - {job.company}</h3>
                            <p>{job.startDate} - {job.endDate}</p>
                            <p>{job.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <h2>Certifications</h2>
                <ul className="list-disc list-inside">
                    {resume.certifications.map((cert, i) => (
                        <li key={i}>
                            <h3>{cert.title} - {cert.issuer}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
