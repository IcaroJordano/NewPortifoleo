import imagem from '../../../images/avatar.jpeg'

export function SobrePage() {
    return (
        <div className=" pt-20">
            <h2 className="text-xl lg:text-3xl  lg:mx-10 p-4 text-white dark:text-neutral-700">Hello, I'm Icaro Jordano<span className="text-teal-400">.</span></h2>

            <h3 className="text-2xl lg:text-4xl lg:mx-10 p-4 text-white dark:text-neutral-700">Desenvolvedor web <span className="text-teal-400">Front-end</span> Atuando em Fortaleza, Ceará</h3>

            <div className="flex items-center justify-around lg:my-10" >
                <div className="lg:w-11/12  text-neutral-100/90 dark:text-neutral-600 flex flex-col-reverse lg:flex-row  items-center lg:items-start" >
                    <p className=" p-4 lg:text-base leading-7 lg:leading-8 ">Sou desenvolvedor Frontend com sólida experiência em  <span className='text-teal-500'>React, especializado na criação de interfaces responsivas e focadas na experiência do usuário.</span> Com quatro anos de dedicação ao universo da programação e uma formação em Engenharia de Software, meu objetivo é aplicar conhecimentos técnicos avançados para desenvolver produtos digitais impactantes e que gerem valor para o cliente.
                        <br /><br />
                        Durante minha trajetória, desenvolvi projetos web freelance que abrangem desde e-commerce até plataformas de anúncios e catálogos de produtos, sempre focando em desempenho e usabilidade. Meu compromisso com a qualidade reflete-se na criação de componentes reutilizáveis e na otimização de aplicações, utilizando práticas de <span className='text-teal-500'>gerenciamento de estado (Redux e Context API) e integrações de APIs RESTful</span> que garantem escalabilidade e flexibilidade.
                        <br /><br />
                        Além do desenvolvimento técnico, sou proativo em trabalhar colaborativamente com times, participando ativamente de code reviews e buscando soluções para aprimorar a performance e manter um código limpo e eficiente. Tenho <span className='text-teal-500'>experiência com versionamento de código (Git), testes automatizados, e estou sempre em busca de novas ferramentas e tecnologias</span>, como Webpack, para elevar o nível das entregas.
                        <br /><br />
                        Acredito que tecnologia e inovação caminham juntas e, por isso, busco me juntar a uma equipe que compartilhe essa visão e onde possa crescer contribuindo com minhas habilidades. Estou pronto para fazer parte de um ecossistema digital dinâmico, onde o aprendizado e a evolução contínua são priorizados.
                        <br /><br />
                        <span className='text-center  mx-auto text-teal-500 text-xl'>"O sucesso acontece quando a oportunidade encontra o preparo"<br /> </span>
                        </p>

                <img className="w-80 float-right my-8  h-80 rounded-3xl shadow-2xl shadow-neutral-700  lg:block" src={imagem} alt="" />
                </div>
            </div>
        </div>
    )
}