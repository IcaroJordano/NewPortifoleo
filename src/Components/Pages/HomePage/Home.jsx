import { FaWhatsapp } from "react-icons/fa6";
// import { MdOutlineEmail } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Home() {
    return (
        <section className=" my-10 h-3/6 lg:flex ">
            <div className=" lg:w-8/12 ">
                <h1 className=" ml-4 lg:ml-24 mt-40 lg:mt-36 text-4xl lg:text-5xl font-bold leading-snug lg:leading-tight w-11/12 lg:w-8/12  text-white dark:text-neutral-800" >Icaro Jordano Front-end Developer.</h1>
                <p className="ml-4 lg:ml-24 mt-7 lg:mt-6 w-12/12 lg:w-9/12 text-gray-400 dark:text-neutral-600 text-base leading-relaxed lg:leading-7 ">Desenvolvedor Front-end com 4 anos de experiência, focado em interfaces dinâmicas e responsivas. Especialista em HTML, CSS e JavaScript com experiência em React. Apaixonado por transformar protótipos em interfaces reais e intuitivas, trabalho em estreita colaboração com equipes de UX/UI para garantir a melhor experiência ao usuário. Busco uma posição onde possa contribuir com inovação, usabilidade e melhoria contínua.</p>
                <div className="w-5/12 lg:w-3/12 ml-5 lg:ml-28 mt-6 h-6 flex  justify-between">
                    <a className="text-neutral-300/80 scale-150 dark:text-neutral-600 w-1/6 rounded-lg" href="https://wa.me/558599683-7880" target="blank"><FaWhatsapp  ></FaWhatsapp></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href="mailto:icarojordano08@gmail.com?" target="blank"><MdOutlineEmail  ></MdOutlineEmail></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href="https://github.com/IcaroJordano" target="blank"><FaGithub  >.</FaGithub></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href="https://www.linkedin.com/in/icaro-jordano/" target="blank"><FaLinkedin  ></FaLinkedin></a>
                </div>
            </div>
            <div className="hidden lg:flex     pt-20 items-center mr-40 relative" >
                <img className="  shadow-lg  shadow-black rounded-lg h-80 object-cover w-96 hidden lg:block " src="https://icarojordano.github.io/Portifoleo/assets/avatar-ChLfIcQ1.jpeg" alt="" />
                <img className="rounded-lg cursor-pointer shadow-lg shadow-black object-contain w-80 hidden absolute  -bottom-5 z-20 -right-32   lg:block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgaXKw4_lwPhnPNSQu-sW7T437vvVI62VVw&s" alt="" />

            </div>
        </section>
    )
}