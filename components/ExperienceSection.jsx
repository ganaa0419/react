import { experiences } from "./Data/ExperienceList";
import { Description } from "./Description";
import { Title } from "./Title";

export function ExperienceSection() {
  return (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="p-8 gap-4 border rounded-xl bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.06)]"
          >
            <img src={experience.logo} className="mb-4" />
            <Description label={experience.date} />
            <Title label={experience.position} />
            <ul className="text-gray-600 list-disc ml-7">
              {experience.tasks.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
