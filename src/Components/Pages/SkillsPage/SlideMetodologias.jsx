import { CardSoftSkills } from "./CardSoftSkills";
import { MdFeedback, MdGroup, MdTimer } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaLightbulb } from "react-icons/fa";
import { AiOutlineBranches, AiOutlineFileText, AiOutlinePullRequest } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";

export function SlideMetodologias(params) {
    return (
        <div className="lg:hidden">
            <Swiper
                className='    pb-20 w-11/12'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={"0"}
                slidesPerView={'1.5'}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <CardSoftSkills titulo={'Git Flow'} 
                    texto={'Facilita a colaboração, garantindo um desenvolvimento estruturado e controlado em cada etapa do projeto.'}>
                        <AiOutlineBranches></AiOutlineBranches></CardSoftSkills>

                </SwiperSlide>

                <SwiperSlide>
                    <CardSoftSkills titulo={'Github Flow'} 
                    texto={'Colaboração e integra mudanças contínuas, garantindo qualidade e agilidade nas entregas de projeto.'}
                    ><AiOutlinePullRequest></AiOutlinePullRequest></CardSoftSkills>

                </SwiperSlide>

                <SwiperSlide>
                    <CardSoftSkills titulo={'Conventional Commits'} texto={'Padronizar mensagens de commit, facilitando a legibilidade e o histórico do projeto melhorando a comunicação na equipe.'}><AiOutlineFileText></AiOutlineFileText></CardSoftSkills>

                </SwiperSlide>

                <SwiperSlide>
                    <CardSoftSkills titulo={'Mobile First'} texto={'Garantir otimizacao em dispositivos móveis, priorizando desempenho e usabilidade antes de expandir para telas maiores'}><BiMobileAlt></BiMobileAlt></CardSoftSkills>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}