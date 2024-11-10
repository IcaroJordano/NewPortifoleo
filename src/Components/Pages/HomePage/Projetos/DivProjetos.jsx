import { useMediaQuery } from "@uidotdev/usehooks";

import { Swiper} from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function DivProjetos({ titulo, children }) {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    return (
        <div className=" overflow-visible mb-10">
            <h3 className="pl-4 lg:pl-20 pb-5 text-white dark:text-neutral-700 text-3xl font-normal">{titulo}</h3>
            <Swiper                
            className='flex justify-center overflow-visible items-center pb-20 w-11/12 '
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={isSmallDevice? "50" : "0"}
                slidesPerView={isSmallDevice ? "1" : "2.7"}
                navigation
                pagination={{ clickable: true }}
            >
                    {children}
            </Swiper>
        </div>
    );
};