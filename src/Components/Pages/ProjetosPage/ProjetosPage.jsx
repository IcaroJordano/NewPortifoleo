import { CardAllProjetos } from "./CardAllProjetos";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function ProjetosPage() {
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
        <div className={`flex justify-center pt-28 ${projetos.length>3?"h-auto":'h-screen'}`}>
            <div className=" flex mx-auto justify-around lg:justify-normal flex-wrap ">
                {projetos.map((item)=>(
                    <CardAllProjetos deploy={item.linkDeploy} imagem={item.linkImage} titulo={item.titulo}></CardAllProjetos>

                ))}
            </div>
        </div>
    )
}