import { GitIcon } from "./icons/Git";
import { TwitterIcon } from "./icons/Twitter";
import { FigmaIcon } from "./icons/Figma";

export function SocialIcon() {
  return (
    <div className="flex">
      <div className="p-1.5">
        <GitIcon />
      </div>
      <div className="p-1.5">
        <TwitterIcon />
      </div>
      <div className="p-1.5">
        <FigmaIcon />
      </div>
    </div>
  );
}
