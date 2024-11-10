import { SlideMetodologias } from "./SlideMetodologias";
import { BiCodeBlock } from "react-icons/bi";


export function Metodologias() {
    return (
        <div className=" flex flex-col">
            <h2 className=" ml-4 lg:ml-8 w-max  underline  rounded-2xl h-10 items-center text-neutral-400 dark:text-neutral-600  flex" ><BiCodeBlock className="text-white text-lg dark:text-black mx-2"></BiCodeBlock> Metodologias</h2>
            <div>
                <SlideMetodologias></SlideMetodologias>                
            </div>
        </div>
    )
}
