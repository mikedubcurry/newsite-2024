'use client'

import { useState } from "react";

export default function SkillViewer({ skills }: { skills: { skill: string; use: string }[] }) {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-2">
            <ul className="list-disc list-inside">
                {skills.map(({ skill, use }, i) => (
                    <li className="text-lg" key={i}>
                        <span onClick={() => setSelectedSkill(skill)} className={selectedSkill === skill ? 'text-purple-400' : 'cursor-pointer hover:text-purple-500'}>{skill}</span>
                    </li>
                ))}
            </ul>
            <div className="">
                {selectedSkill && (
                    <div className="flex flex-col justify-center gap-4">
                        <h3 className="font-bold text-xl text-gray-500">{selectedSkill}</h3>
                        <p className="text-lg text-gray-200">{skills.find(({ skill }) => skill === selectedSkill)?.use}</p>
                    </div>
                )}
            </div>
        </div>

    )
}
