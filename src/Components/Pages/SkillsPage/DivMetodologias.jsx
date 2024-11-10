import { CardSoftSkills } from "./CardSoftSkills";
import { AiOutlineBranches, AiOutlineFileText, AiOutlinePullRequest } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";

export function DivMetodologias(params) {
    return (
        <div className="lg:flex hidden  justify-between pl-16 ">

            <CardSoftSkills titulo={'Git Flow'}
                texto={'Facilita a colaboração, garantindo um desenvolvimento estruturado e controlado em cada etapa do projeto.'}>
                <AiOutlineBranches></AiOutlineBranches></CardSoftSkills>


            <CardSoftSkills titulo={'Github Flow'}
                texto={'Colaboração e integra mudanças contínuas, garantindo qualidade e agilidade nas entregas de projeto.'}
            ><AiOutlinePullRequest></AiOutlinePullRequest></CardSoftSkills>


            <CardSoftSkills titulo={'Conventional Commits'} texto={'Padronizar mensagens de commit, facilitando a legibilidade e o histórico do projeto melhorando a comunicação na equipe.'}><AiOutlineFileText></AiOutlineFileText></CardSoftSkills>


            <CardSoftSkills titulo={'Mobile First'} texto={'Garantir otimizacao em dispositivos móveis, priorizando desempenho e usabilidade antes de expandir para telas maiores'}><BiMobileAlt></BiMobileAlt></CardSoftSkills>

        </div>
    )
}