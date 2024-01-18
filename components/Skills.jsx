import { SkillsList } from "./Data/SkillsList";

export function Skills({ SkillsList }) {
    return (
      <div>
        {/* <img src={SkillsList[0].Image}>{SkillsList[0].Image}</img> */}
        <p>{SkillsList[0].Name}</p>
      </div>
    );
  }