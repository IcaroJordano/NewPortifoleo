import { FaWhatsapp } from "react-icons/fa6";
// import { MdOutlineEmail } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";


export function ContatoPage() {
    return (
        <div className=" pt-28  pb-8">
            <h2 className="pl-8 lg:pl-32 text-5xl mb-2 font-bold text-neutral-100 dark:text-neutral-900">Contact Me.</h2>
            <p className="pl-8 lg:pl-32 text-neutral-400 ">Ver meu curriculo no <a className="text-amber-600 underline" href="">formato pdf</a></p>

            <div className=" my-10 lg:flex-row flex flex-col text-2xl justify-around items-center w-9/12 mx-auto dark:text-neutral-900 text-white">
                <div className="justify-around w-64 h-48 flex-col   flex items-center text-center   p-4 my-4 border  border-gray-300/20 dark:border-gray-700/20 rounded-lg  "><MdWork className="text-7xl text-amber-600 mx-2  "></MdWork>Contratacoes CLT</div>
                <div className="justify-around w-64 h-48 flex-col   flex items-center text-center    p-4 my-4 border  border-gray-300/20 dark:border-gray-700/20 rounded-lg  "><RiMoneyDollarCircleFill className="text-7xl text-amber-600 mx-2  "></RiMoneyDollarCircleFill> Projetos Freelancer</div>
                <div className="justify-around w-64 h-48 flex-col   flex items-center  text-center   p-4 my-4 border  border-gray-300/20 dark:border-gray-700/20 rounded-lg  "><FaLaptopCode className="text-7xl text-amber-600 mx-2  "></FaLaptopCode>Contracacoes Pj</div>
            </div>

            <div className="pl-8 text-neutral-200 dark:text-neutral-900 pt-8 justify-around lg:flex ">
                <div className=" w-11/12 lg:w-5/12">
                    <p className=" mb-4 text-lg">Estou disponivel para novos projetos e contracacoes. Entre em contato e marcaremos uma conversa.</p>
                    <p className=" mb-10">Envie uma mensagem para o email <a className="text-amber-600 underline" href="">IcaroJordano08@gmail.com</a> ou entre em contato atravez de uma das redes abaixo</p>

                </div>

                <div className="dark:text-neutral-900 text-neutral-200">
                    <a href="" className="flex  items-center text-xl" >
                        <MdOutlineEmail className="text-amber-600 underline my-2 mr-2">
                        </MdOutlineEmail>icarojordano08@gmail.com
                    </a>
                    <a href="" className="flex  items-center text-xl">
                        <FaWhatsapp className="text-amber-600 underline my-2 mr-2">
                        </FaWhatsapp>
                        +55 85996837880</a>

                    <a href="" className="flex  items-center text-xl">
                        <FaLinkedin className="text-amber-600 underline my-2 mr-2">
                        </FaLinkedin>

                        Linkedin</a>

                    <a href="" className="flex  items-center text-xl">
                        <FaGithub className="text-amber-600 underline my-2 mr-2">
                        </FaGithub>
                        Github</a>
                </div>
            </div>
        </div>
    )
}