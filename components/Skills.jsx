import { SkillsList } from "./Data/SkillsList";

export function Skills() {
    return (
      <div>
        <div>
          <img src={SkillsList[0].Image}/>
        </div>
        <p>{SkillsList[0].Name}</p>
      </div>
    );
  }