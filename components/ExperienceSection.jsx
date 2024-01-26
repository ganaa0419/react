import { experiences } from "./Data/ExperienceList";

export function ExperienceSection() {
    return (
        <>
            <div className="flex flex-col gap-4">
                {experiences.map((experience) => (
                    <div key={experience.id} className="p-8 gap-4 border rounded-xl bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.06)]">
                        <img src={experience.logo} className="mb-4"/>
                        <p className="mb-4 text-gray-700">{experience.date}</p>
                        <p className="mb-4 text-lg text-gray-900">{experience.position}</p>
                        <ul className="text-gray-600 list-disc ml-7">
                            <li>{experience.project1}</li>
                            <li>{experience.project2}</li>
                            <li>{experience.project3}</li>
                            <li>{experience.project4}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
} 