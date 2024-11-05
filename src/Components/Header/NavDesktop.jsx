export function NavDesktop() {

    return(
        <nav className={`w-96 hidden lg:flex align-bottom text-slate-100 dark:text-slate-900 justify-around bg-zinc-800 dark:bg-neutral-50 rounded-full dark:border-neutral-300/50 dark:border`} >
                <a className=" text-sm text-center my-auto hover:underline " href="">Home</a>
                <a className=" text-sm text-center my-auto hover:underline " href="">Sobre</a>
                <a className=" text-sm text-center my-auto hover:underline " href="">Projects</a>
                <a className=" text-sm text-center my-auto hover:underline " href="">Skills</a>
                <a className=" text-sm text-center my-auto hover:underline " href="">Contato</a> 
        </nav>
    )
}