import { HardSkills } from "./HardSkills";
import { Metodologias } from "./Metodologias";
import { SoftSkills } from "./SoftSkills";

export function SkillsPage(params) {
    return (
        <div className=" pt-20 w-screen lg:w-11/12">
            <SoftSkills></SoftSkills>
            <Metodologias></Metodologias>
            <HardSkills></HardSkills>
        </div>
    )
}