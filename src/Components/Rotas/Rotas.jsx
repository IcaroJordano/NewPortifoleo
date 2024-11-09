import { Routes, Route } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/HomePage"
import { SobrePage } from "../Pages/SobrePage/SobrePage"
import { ProjetosPage } from "../Pages/ProjetosPage/ProjetosPage"
import { SkillsPage } from "../Pages/SkillsPage/SkillsPage"
import { ContatoPage } from "../Pages/ContatoPage/ContatoPage"

export function Rotas() {
    return (
        <Routes>
            <Route path="/NewPortifoleo" element={<HomePage></HomePage>}></Route>
            <Route path="/NewPortifoleo/sobre" element={<SobrePage></SobrePage>}></Route>
            <Route path="/NewPortifoleo/projetos" element={<ProjetosPage></ProjetosPage>}></Route>
            <Route path="/NewPortifoleo/skills" element={<SkillsPage></SkillsPage>}></Route>
            <Route path="/NewPortifoleo/contato" element={<ContatoPage></ContatoPage>}></Route>
        </Routes>
    )
}