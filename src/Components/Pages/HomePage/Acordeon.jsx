import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

const Acordeon = ({ title, children }) => {

    const [active, setActive] = useState(false)

    return (
        <div
            className="w-11/12 transition-all duration-300 mx-auto"
            onClick={() => setActive(!active)}
        >
            <div className="  flex text-sm my-4 justify-between font-sans items-center pt-2 border-t-2 border-neutral-400 dark:border-neutral-800/20">
                <span className="text-xl text-neutral-400">{title}</span>
                <div className="relative w-4 h-4">
                    <IoRemoveOutline className={`transition-all duration-100 ${active ? "max-h-20" : "max-h-0" } text-neutral-400 dark:text-neutral-900/70`}/>
                    <FaPlus className={`transition-all duration-100 ${active ? "max-h-0" : "max-h-20"} text-neutral-400 dark:text-neutral-900/70`}/>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-500 text-start text-neutral-800/80 text-xs w-10/12 mx-auto ${active ? "max-h-60" : "max-h-0"}`}>
                {children}
            </div>
        </div>
    )

}
export default Acordeon