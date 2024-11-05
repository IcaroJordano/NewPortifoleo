import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub } from "react-icons/fa";


export function CardProduto({imagem}) {
    return (
        <SwiperSlide className='flex  text-neutral-300 dark:text-neutral-500 justify-center w-full py-10 pt-8    lg:pl-0 items-center ' >
            <div className='w-full lg:ml-8 lg:w-10/12 cursor-pointer     lg:h-96 '>
                <h4 className=" text-xl ">E-shop React</h4>
                <div className="">
                    <img className="my-3 h-56 rounded-md w-full object-cover  " src={imagem} alt="" />
                </div>
                <p className=" text-sm line-clamp-3">Lorem ipsum, dolor sit amet consectetur adipisicing sum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam doloremque</p>
            </div>
        </SwiperSlide>
    )
}