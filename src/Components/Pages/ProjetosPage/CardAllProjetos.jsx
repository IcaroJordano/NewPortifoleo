import { FaEye } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaFileAlt } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import banner from '../../../images/banner.jpeg'

export function CardAllProjetos({ imagem, titulo, github, deploy, tag1, tag2 }) {
    return (
        <a href={deploy} target="_blank" className="w-11/12 lg:w-[380px]  mb-20  rounded-xl transition-all duration-500 bg-zinc-800 dark:bg-slate-200 dark:border border-neutral-400/20">
            <div className="w-full h-52 rounded-tl-2xl ">
                <img className="object-cover h-full rounded-t-xl w-full" src={imagem || null} alt="" />
            </div>
            <div className="w-full dark:text-neutral-700 text-neutral-300 py-4 ">
                <div className="flex items-center ps-2">
                    <FaFileAlt />
                    <p className="text-nowrap px-2 overflow-clip text-ellipsis w-11/12 text-start"> {titulo} </p>

                </div>
                <div className="flex text-sm pt-2 text-neutral-300 dark:text-white ps-1 ">
                    <span className="px-3   bg-neutral-700 rounded-md  px1 mx-1">{tag1}</span>
                    <span className="px-3   bg-neutral-700 rounded-md  px1 mx-1">{tag2}</span>
                </div>
            </div>
        </a>
    )
}