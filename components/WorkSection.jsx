import { projects } from "./Data/WorkList";
import { Chip } from "./Chip";
import { Share } from "./icons/Share";
import { Description } from "./Description";
import { Title } from "./Title";

export function WorkSection() {
  return (
    <>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div className="flex flex-col gap-6 border rounded-xl shadow-[0_2px_2px_0_rgba(0,0,0,0.06)]">
            <img src={project.Picture} className="p-8 bg-gray-50" />
            <div className="p-8">
              <Title label={project.name} />
              <Description label={project.description} />
              <div className="grid grid-cols-2 justify-normal">
                {project.skills.map((skill) => (
                  <Chip label={skill} />
                ))}
              </div>
              <div className="p-1">
                <Share />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
