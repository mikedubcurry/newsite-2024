export async function GET() {
    const resume = {
        name: "Michael Curry",
        title: "Software Engineer",
        website: "mikecurry.dev",
        mission: "I am seeking fulltime employment as a software engineer in the Upstate New York area. I have experience with React, Node, and PHP, but I'm always looking to learn new things. I also work with many services offered by AWS to host applications and have experience migrating applications to the cloud.",
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
                description: "Build and maintain full stack web applications for clients using Laravel, Vue, and AWS. Work with clients to determine requirements and design solutions. Notable acheivments include integrating a modern frontend framework with a legacy PHP application, develop and upgrade a serverless application for auditing accessibility, and integrating AI in a mobile web application.",
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

    return Response.json({ resume });
}
