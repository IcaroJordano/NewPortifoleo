import { Home } from "./Home";
import { Projetos } from "../HomePage/Projetos/Projetos";
import { ButtonDarkMode } from "../../Header/ButtonDarkMode";
import Skills from "./Skills";
import Acordeon from "./Acordeon";

export function HomePage() {
    return (
    <div className="p-0 m-0">

        <ButtonDarkMode/>
        <Home></Home>
        {/* <hr className="my-10 w-11/12 opacity-40 mx-auto border-neutral-200 dark:border-neutral-600 " /> */}
        <Projetos></Projetos>
        {/* <hr className="my-10 w-11/12 opacity-40  mx-auto border-neutral-200 dark:border-neutral-600 " /> */}
        {/* <Skills/> */}
        {/* <Acordeon title={"Sobre mim"}>aaaa</Acordeon> */}
    </div>

    )
}