import { CardAllProjetos } from "../../ProjetosPage/CardAllProjetos";
import { CardProduto } from "./CardProjeto";
import { DivProjetos } from "./DivProjetos";
import { Swiper, SwiperSlide } from 'swiper/react';


export function Projetos() {
    const lista = [1, 1, 1, 2]
    return (
        <section className="w-full ">
            <h2 className="p-4 lg:pl-20 pt-16 text-white dark:text-neutral-800 text-4xl font-bold" >Backup Projetos</h2>
            <DivProjetos titulo={'Frelancer'} className='overflow-visible'>
                {lista.map(() => (
                    <SwiperSlide className=" lg:mr-0 lg:ml-6 overflow-visible" >
                        {/* <CardProduto imagem={'https://i.imgur.com/cSytoSD.jpeg,https://i.imgur.com/WwKucXb.jpeg,https://i.imgur.com/cE2Dxh9.jpeg'}></CardProduto> */}
                        <CardAllProjetos></CardAllProjetos> 
                    </SwiperSlide>
                ))}
            </DivProjetos>            
            <DivProjetos titulo={'Frelancer'}>
                {lista.map(() => (
                    <SwiperSlide className=" lg:mr-0 lg:ml-6 overflow-visible" >
                        {/* <CardProduto imagem={'https://i.imgur.com/cSytoSD.jpeg,https://i.imgur.com/WwKucXb.jpeg,https://i.imgur.com/cE2Dxh9.jpeg'}></CardProduto> */}
                        <CardAllProjetos></CardAllProjetos> 
                    </SwiperSlide>
                ))}
            </DivProjetos>
        </section>
    )
}