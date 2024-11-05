import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Home() {
    return (
        <section className=" my-10 h-3/6 lg:flex ">
            <div className=" ">
                <h1 className=" ml-4 lg:ml-24 mt-40 lg:mt-36 text-3xl lg:text-5xl font-bold leading-snug lg:leading-tight w-11/12 lg:w-8/12  text-white dark:text-neutral-800" >Software designer, founder, and amateur astronaut.</h1>
                <p className="ml-4 lg:ml-24 mt-7 lg:mt-6 w-12/12 lg:w-7/12 text-gray-400 dark:text-neutral-600 text-base leading-relaxed lg:leading-7 ">I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
                <div className="w-5/12 lg:w-2/12 ml-5 lg:ml-24 mt-5 h-6 flex  justify-between">
                    <a className="text-neutral-300/80 scale-150 dark:text-neutral-600 w-1/6 rounded-lg " href=""><FaXTwitter  ></FaXTwitter></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href=""><FaInstagram  ></FaInstagram></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href=""><FaGithub  >.</FaGithub></a>
                    <a className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg" href=""><FaLinkedin  ></FaLinkedin></a>
                </div>
            </div>
            <div className="hidden lg:flex  w-1/2 h-full   pt-32 items-center mr-40 relative" >
                <img className=" opacity-75 shadow-lg shadow-black rounded-lg h-80 object-cover w-96 hidden lg:block " src="https://icarojordano.github.io/Portifoleo/assets/avatar-ChLfIcQ1.jpeg" alt="" />
                <img className="rounded-lg cursor-pointer shadow-lg shadow-black object-contain w-80 hidden absolute  -bottom-12 z-20 -right-32   lg:block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgaXKw4_lwPhnPNSQu-sW7T437vvVI62VVw&s" alt="" />

            </div>
        </section>
    )
}