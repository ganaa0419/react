import { skills } from "./Data/SkillsList";

export function SkillsSection() {
  return (
    <>
      <div className="grid grid-cols-3 justify-between">
        {skills.map((skill) => (
          <div key={skill.Name} className="flex flex-col mb-4">
            <img src={skill.Image} className="m-auto size-16"/>
            <p className="m-auto text-gray-600">{skill.Name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
