import { useEffect, useState } from "react";
import { CardAllProjetos } from "../../ProjetosPage/CardAllProjetos";
import { CardProduto } from "./CardProjeto";
import { DivProjetos } from "./DivProjetos";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";

export function Projetos() {
    const lista = [1, 1, 1, 2]
    const [projetos,setProjetos]=useState([])
    useEffect(()=>{
        axios.post(
            'https://graphql.datocms.com/',
            {
                query: `{
                    allProjetos{
                        titulo
                        category
                        linkImage
                        linkDeploy
                        tag1
                        tag2
                        tag3
                        tag4
                    }
                }`
            },
            {
                headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Icaro Jordano 8b133e7fe63b082e4161293a105f24`,
          }
    }
)
          .then((res) => {
              setProjetos(res.data.data['allProjetos'])
              console.log(res.data.data['allProjetos'], projetos.length)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    return (
        <section className="w-full ">
            <h2 className="p-4 lg:pl-20 pt-16 text-white dark:text-neutral-800 text-4xl font-bold" >Backup Projetos</h2>
            <DivProjetos titulo={'Frelancer'} className='overflow-visible'>
                {projetos.map((item) =>(

                    <SwiperSlide className=" lg:mr-0 lg:ml-6 overflow-visible" >
                        <CardAllProjetos imagem={item.linkImage} titulo={item.category} ></CardAllProjetos> 
                    </SwiperSlide>
                ))}
            </DivProjetos>            
        </section>
    )
}