import { FaFeatherAlt } from "react-icons/fa";
import { SlideSoftSkills } from "./SlideSoftSkills";
import { DivSoftSkills } from "./DivSoftSkills";


export function SoftSkills() {
    return (
        <div className=" flex flex-col">
            <h2 className=" ml-4 lg:ml-8 w-max  underline  rounded-2xl h-10 items-center text-neutral-400 dark:text-neutral-600  flex" ><FaFeatherAlt className="text-white dark:text-black mx-2"></FaFeatherAlt> Soft Skills</h2>
            <div>
                <SlideSoftSkills></SlideSoftSkills>
                <DivSoftSkills></DivSoftSkills>
            </div>
        </div>
    )
}
