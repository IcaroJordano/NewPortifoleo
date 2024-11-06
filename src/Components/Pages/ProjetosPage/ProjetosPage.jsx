import { CardAllProjetos } from "./CardAllProjetos";

export function ProjetosPage() {
    return (
        <div className="  flex justify-center pt-28">
            <div className=" flex mx-auto justify-around lg:justify-normal flex-wrap ">
                <CardAllProjetos deploy={'https://icarojordano.github.io/Tailwind/'} imagem={'https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75'} titulo={"Portifoleo Tailwind"}></CardAllProjetos>
                <CardAllProjetos deploy={'https://icarojordano.github.io/Conference-Schedule/'} imagem={'https://icarojordano.github.io/Conference-Schedule/assets/Infomation-BabZBlIZ.avif'} titulo={"Anuncio de Evento"}></CardAllProjetos>
                <CardAllProjetos deploy={'https://icarojordano.github.io/React-e-commerc/'} imagem={'https://i.imgur.com/cSytoSD.jpeg,https://i.imgur.com/WwKucXb.jpeg,https://i.imgur.com/cE2Dxh9.jpeg'} titulo={"E-Shop Building React"}></CardAllProjetos>
                <CardAllProjetos deploy={'https://icarojordano.github.io/1-Marketing-website/'} imagem={'https://icarojordano.github.io/1-Marketing-website/assets/fonebranco-DcaGvqC0.png'} titulo={'One Page Product'}></CardAllProjetos>
                <CardAllProjetos deploy={'https://icarojordano.github.io/Portifoleo/'} imagem={'https://icarojordano.github.io/Portifoleo/assets/avatar-ChLfIcQ1.jpeg'} titulo={'My First Portfoleo'}></CardAllProjetos>
            </div>
        </div>
    )
}