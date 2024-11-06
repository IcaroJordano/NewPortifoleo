import { CardAllProjetos } from "./CardAllProjetos";

export function ProjetosPage() {
    return (
        <div className="  flex justify-center pt-28">
            <div className=" flex mx-auto justify-around lg:justify-normal flex-wrap ">
                <CardAllProjetos></CardAllProjetos>
                <CardAllProjetos></CardAllProjetos>
                <CardAllProjetos></CardAllProjetos>
                <CardAllProjetos></CardAllProjetos>
                <CardAllProjetos></CardAllProjetos>
            </div>
        </div>
    )
}