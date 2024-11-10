import { FaEye } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { FaGithub } from "react-icons/fa";

export function CardAllProjetos({ imagem, titulo, github, deploy }) {
    return (
        <div className="w-80 lg:w-96 h-56 lg:h-64 mb-10 lg:ml-4 ">
            <div className="h-5/6 rounded-t-md justify-center flex relative  overflow-hidden">
                <a className="justify-center w-full flex" href={deploy} target="_blank" >
                    <img className="w-full  object-cover opacity-80 dark:opacity-100" src={imagem} alt="" />
                </a>
                <h3 className="absolute text-xl text-white top-32 lg:top-40 left-5">{titulo}</h3>
            </div>
            <div className="h-1/6 rounded-b-md items-center justify-around bg-neutral-200/90 flex">
                <div className="text-xs h-full  justify-center flex items-center text-neutral-500">
                    <span className="px-1 hover:underline" >React</span>
                    <span className="px-1 hover:underline" >Tailwind</span>
                    <span className="px-1 hover:underline  " >Bootstrap</span>
                    <span className="px-1 hover:underline hidden lg:block" >Responsivo</span>
                </div>
                <div className="flex text-neutral-900 text-xl items-center h-full ml-14">
                    <a target="_blank" href={github}><FaGithub className=" flex mx-1  "></FaGithub></a>
                    <a target="_blank" href={deploy}><FiExternalLink className=" flex mx-1  "></FiExternalLink></a>

                </div>
            </div>
        </div>
        
    )
}