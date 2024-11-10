import { BiCodeAlt } from "react-icons/bi";
import { CardHardSkills } from "./CardHardSkills";


export function HardSkills() {
    return (
        <div className="pl-4 lg:pl-8 flex flex-col  ">
            <h2 className="w-max border-gray-400 border rounded-2xl h-10 items-center text-neutral-400 dark:text-neutral-600 px-4 flex" ><BiCodeAlt className="text-white dark:text-black mr-1"></BiCodeAlt> Hard Skills</h2>
            <div className="flex justify-around flex-wrap lg:ml-16  " >
                <CardHardSkills image={'https://cdn-icons-png.flaticon.com/128/174/174854.png'}></CardHardSkills>
                <CardHardSkills image={'https://cdn-icons-png.flaticon.com/128/732/732190.png'}></CardHardSkills>
                <CardHardSkills image={'https://cdn-icons-png.flaticon.com/128/5968/5968292.png'}></CardHardSkills>
                <CardHardSkills image={'https://cdn-icons-png.flaticon.com/128/15466/15466163.png'}></CardHardSkills>
                <CardHardSkills image={'https://cdn-icons-png.flaticon.com/128/17034/17034463.png'}></CardHardSkills>
                <CardHardSkills image={'data:image/png;base64,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'}></CardHardSkills>
                <CardHardSkills image={'https://cdn-icons-png.flaticon.com/128/919/919851.png'}></CardHardSkills>
                <CardHardSkills image={'data:image/png;base64,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'}></CardHardSkills>
                <CardHardSkills image={'data:image/png;base64,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'}></CardHardSkills>
                <CardHardSkills image={'https://cdn-icons-png.flaticon.com/128/5968/5968672.png'}></CardHardSkills>

            </div>
        </div>
    )
}