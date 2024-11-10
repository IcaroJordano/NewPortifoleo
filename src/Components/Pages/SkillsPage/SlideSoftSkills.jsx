import { CardSoftSkills } from "./CardSoftSkills";
import { MdFeedback, MdGroup, MdTimer } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaLightbulb } from "react-icons/fa";

export function SlideSoftSkills(params) {
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
                    <CardSoftSkills titulo={'Comunicacao'} 
                    texto={'Minha comunicação clara e colaborativa facilita alinhamentos, promove entendimento e fortalece relações profissionais.'}><MdGroup></MdGroup></CardSoftSkills>

                </SwiperSlide>

                <SwiperSlide>
                    <CardSoftSkills titulo={'Gestao de tempo'} 
                    texto={'Minha gestão de tempo garante eficiência, priorização precisa e entregas consistentes em cada projeto.'}
                    ><MdTimer></MdTimer></CardSoftSkills>

                </SwiperSlide>

                <SwiperSlide>
                    <CardSoftSkills titulo={'Criatividade'} texto={'Minha criatividade impulsiona soluções inovadoras e adaptáveis, agregando valor único a cada projeto.'}><FaLightbulb></FaLightbulb></CardSoftSkills>

                </SwiperSlide>

                <SwiperSlide>
                    <CardSoftSkills titulo={'Feedback'} texto={'Tenho habilidade em dar e receber feedbacks construtivos, promovendo aprendizado contínuo e melhorias.'}><MdFeedback></MdFeedback></CardSoftSkills>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}