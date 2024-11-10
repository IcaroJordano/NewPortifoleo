import { CardSoftSkills } from "./CardSoftSkills";
import { MdFeedback, MdGroup, MdTimer } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";

import { FaLightbulb } from "react-icons/fa";
export function DivSoftSkills(params) {
    return (
        <div className="lg:flex hidden  justify-between pl-16 ">
            
                    <CardSoftSkills titulo={'Comunicacao'} 
                    texto={'Minha comunicação clara e colaborativa facilita alinhamentos, promove entendimento e fortalece relações profissionais.'}><MdGroup></MdGroup></CardSoftSkills>

                

            
                    <CardSoftSkills titulo={'Gestao de tempo'} 
                    texto={'Minha gestão de tempo garante eficiência, priorização precisa e entregas consistentes em cada projeto.'}
                    ><MdTimer></MdTimer></CardSoftSkills>

                

            
                    <CardSoftSkills titulo={'Criatividade'} texto={'Minha criatividade impulsiona soluções inovadoras e adaptáveis, agregando valor único a cada projeto.'}><FaLightbulb></FaLightbulb></CardSoftSkills>

                

            
                    <CardSoftSkills titulo={'Feedback'} texto={'Tenho habilidade em dar e receber feedbacks construtivos, promovendo aprendizado contínuo e melhorias.'}><MdFeedback></MdFeedback></CardSoftSkills>

                
        </div>
    )
}