import { Link } from "react-router-dom";

export function NavDesktop() {

    return(
        <nav className={`w-96 hidden lg:flex align-bottom text-slate-100 dark:text-slate-900 justify-around bg-zinc-800 dark:bg-neutral-50 rounded-full dark:border-neutral-300/50 dark:border`} >
                <Link className=" text-sm text-center my-auto hover:underline " to={'/NewPortifoleo/'} >Home</Link>
                <Link className=" text-sm text-center my-auto hover:underline " to={'/NewPortifoleo/sobre'} >Sobre</Link>
                <Link className=" text-sm text-center my-auto hover:underline " to={'/NewPortifoleo/projetos'} >Projects</Link>
                <Link className=" text-sm text-center my-auto hover:underline " to={'/NewPortifoleo/skills'} >Skills</Link>
                <Link className=" text-sm text-center my-auto hover:underline " to={'/NewPortifoleo/contato'} >Contato</Link> 
                {/* <Link></Link> */}
        </nav>
    )
}