import { Routes, Route } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/HomePage"
import { SobrePage } from "../Pages/SobrePage/SobrePage"
import { ProjetosPage } from "../Pages/ProjetosPage/ProjetosPage"
import { SkillsPage } from "../Pages/SkillsPage/SkillsPage"
import { ContatoPage } from "../Pages/ContatoPage/ContatoPage"

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/sobre" element={<SobrePage></SobrePage>}></Route>
            <Route path="/projetos" element={<ProjetosPage></ProjetosPage>}></Route>
            <Route path="/skills" element={<SkillsPage></SkillsPage>}></Route>
            <Route path="/contato" element={<ContatoPage></ContatoPage>}></Route>
        </Routes>
    )
}