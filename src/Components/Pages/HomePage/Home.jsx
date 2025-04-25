import { FaWhatsapp } from "react-icons/fa6";
// import { MdOutlineEmail } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import banner from '../../../images/banner.jpeg'
import perfil from '../../../images/perfil.jpeg'

export function Home() {
    return (
        <section className="h-3/6     relative p-0 m-0">
            <div className="pt-10 bg-black w-full lg:hidden">
               <img className="w-full h-48 object-cover" src={banner} alt="" />
            </div>
            <img className="w-20 lg:hidden h-20 rounded-full relative -top-10 left-6 object-cover" src={perfil} alt="" />
            <div className="flex">
            <div className=" lg:w-8/12 ">
                <h1 className=" ml-4 lg:ml-16  lg:mt-36 text-4xl lg:text-5xl font-bold leading-snug lg:leading-tight w-11/12 lg:w-8/12  text-white dark:text-neutral-800" >Icaro Jordano Front-end Developer.</h1>
                <p className="ml-4 lg:ml-16 mt-7 lg:mt-6 w-12/12 lg:w-9/12 text-gray-400 dark:text-neutral-600 text-base leading-relaxed lg:leading-7 ">Desenvolvedor Front-end com 4 anos de experiência, focado em interfaces dinâmicas e responsivas. Especialista em HTML, CSS e JavaScript com experiência em React. Apaixonado por transformar protótipos em interfaces reais e intuitivas, trabalho em estreita colaboração com equipes de UX/UI para garantir a melhor experiência ao usuário. Busco uma posição onde possa contribuir com inovação, usabilidade e melhoria contínua.</p>
                <div className="w-5/12 lg:w-3/12 ml-5 lg:ml-20 mt-6 h-6 flex  justify-between">
                    <a className="text-neutral-300/80 scale-150 dark:text-neutral-600 w-1/6 rounded-lg" href="https://wa.me/558599683-7880" target="blank"><FaWhatsapp  ></FaWhatsapp></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href="mailto:icarojordano08@gmail.com?" target="blank"><MdOutlineEmail  ></MdOutlineEmail></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href="https://github.com/IcaroJordano" target="blank"><FaGithub  >.</FaGithub></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href="https://www.linkedin.com/in/icaro-jordano/" target="blank"><FaLinkedin  ></FaLinkedin></a>
                </div>
            </div>
            <div className="hidden lg:flex     pt-20 items-center mr-40 relative" >
                <img className="  shadow-lg  shadow-black rounded-lg h-80 object-cover w-96 hidden lg:block " src={perfil} alt="" />
                <img className="rounded-lg cursor-pointer shadow-lg shadow-black object-contain w-80 hidden absolute  -bottom-5 z-20 -right-32   lg:block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgaXKw4_lwPhnPNSQu-sW7T437vvVI62VVw&s" alt="" />

            </div>
            </div>
        </section>
    )
}