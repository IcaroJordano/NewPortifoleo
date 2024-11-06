import { FaEye } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { FaGithub } from "react-icons/fa";

export function CardAllProjetos(params) {
    return(
        <div className="w-80 lg:w-96 h-56 lg:h-64 mb-10 lg:ml-6 ">
        <div className="h-5/6 rounded-t-md justify-center flex relative  overflow-hidden">
            <img className="w-full  object-cover" src="https://icarojordano.github.io/Conference-Schedule/assets/Infomation-BabZBlIZ.avif" alt="" />
            <h3 className="absolute text-xl text-white top-32 lg:top-40 left-5">E-shop Building in React</h3>
        </div>
        <div className="h-1/6 rounded-b-md items-center justify-around bg-neutral-200/90 flex">
            <h4 className="text-base text-nowrap hidden line-clamp-1 " >E-sssssshaaop</h4>
            <div className="text-xs h-full  justify-center flex items-center text-neutral-500">
                <span className="px-1 hover:underline" >React</span>
                <span className="px-1 hover:underline" >Tailwind</span>
                <span className="px-1 hover:underline  " >Bootstrap</span>
                <span className="px-1 hover:underline hidden lg:block" >Responsivo</span>
            </div>
            <div className="flex text-neutral-900 text-xl items-center h-full ml-14">
                <FaGithub       className=" flex mx-1  "></FaGithub>
                <FiExternalLink className=" flex mx-1  "></FiExternalLink>
            </div>
        </div>
    </div>
    )
}