import { useEffect, useState } from "react";
import { CardAllProjetos } from "../../ProjetosPage/CardAllProjetos";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton'
import { CardSkelleton } from "../../ProjetosPage/CardSkelleton";

export function Projetos() {
    const lista = [1, 1, 1, 2]
    const [projetos, setProjetos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
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
                setIsLoading(true)
                setTimeout(()=>{
                 setIsLoading(false)
                    
                },3000)
                setProjetos(res.data.data['allProjetos'])
                console.log(res.data.data['allProjetos'])
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    return (
        <section className="w-full ">
            <h2 className="p-4 lg:pl-16 pt-20   text-white dark:text-neutral-800 text-2xl lg:text-3xl  text-start font-bold" > {' < Backup Projetos  />'}</h2>
            <p className="ml-4 lg:ml-16  pb-10 w-10/12 lg:w-9/12 text-gray-400 dark:text-neutral-600  leading-relaxed lg:leading-7">Conheça os meus projetos e entenda mais sobre como eu posso lhe ajudar!</p>
            <div className="flex flex-col items-center justify-center text-center ">
                {isLoading && (
                    
                    <div className="gap-5 flex flex-wrap w-11/12 ">
                    <CardSkelleton />
                    <CardSkelleton />
                    <CardSkelleton />
                    <CardSkelleton />
                </div>)}

                {!isLoading && (
                    <div className="flex gap-5 w-11/12 flex-wrap justify-around">
                    {
                        projetos.map((item) => (<>
                                <CardAllProjetos tag1={item.tag1} tag2={item.tag2} imagem={item.linkImage} titulo={item.titulo} deploy={item.linkDeploy} ></CardAllProjetos>
                                <CardAllProjetos tag1={item.tag1} tag2={item.tag2} imagem={item.linkImage} titulo={item.titulo} deploy={item.linkDeploy} ></CardAllProjetos>
                                </>
                        ))}
                    </div>
                )}
            </div>


        </section>
    )
}