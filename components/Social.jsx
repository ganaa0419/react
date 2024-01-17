import { gitIcon } from "./icons/Git"
import { twitterIcon } from "./icons/Twitter"
import { figmaIcon } from "./icons/Figma"

export function socialIcon() {
    return (
        <div className="flex">
            <div className="p-1.5">
                <gitIcon />
            </div>
            <div className="p-1.5">
                <twitterIcon />
            </div>
            <div className="p-1.5">
                <figmaIcon />
            </div>
        </div>
    )
}