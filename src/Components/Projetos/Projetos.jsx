import { CardProduto } from "./CardProjeto";
import { DivProjetos } from "./DivProjetos";
import { Swiper, SwiperSlide } from 'swiper/react';


export function Projetos() {
    const lista = [1, 1, 1, 2]
    return (
        <section className="w-full ">
            <h2 className="p-4 lg:pl-20 pt-16 text-white dark:text-neutral-800 text-4xl font-bold" >Backup Projetos</h2>
            <DivProjetos titulo={'Frelancer'}>
                {lista.map(() => (
                    <SwiperSlide className=" lg:mr-0" >
                        <CardProduto imagem={'https://i.imgur.com/cSytoSD.jpeg,https://i.imgur.com/WwKucXb.jpeg,https://i.imgur.com/cE2Dxh9.jpeg'}></CardProduto>
                    </SwiperSlide>
                ))}
            </DivProjetos>
            <DivProjetos titulo={'Estudos'}>
                {lista.map(() => (
                    <SwiperSlide className="mr-10">
                        <CardProduto imagem={'https://icarojordano.github.io/1-Marketing-website/assets/fonebranco-DcaGvqC0.png'}></CardProduto>
                    </SwiperSlide>
                ))}
            </DivProjetos>
        </section>
    )
}