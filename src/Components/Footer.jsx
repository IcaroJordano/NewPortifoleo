export function Footer() {
    return (
        <footer className="border-t-slate-50/10 dark:border-t-slate-400/20 border-transparent border">
            <div className="m-10 items-center lg:ml-20 w-10/12 flex flex-col lg:flex-row justify-between  ">
                <div className=" w-9/12 lg:w-3/12  pb-5 justify-between flex font-semibold lg:font-normal dark:text-neutral-900 text-sm text-white">
                    <a className="hover:text-teal-500" href="https://wa.me/558599683-7880" target="blank">Whatsapp</a>
                    <a className="hover:text-teal-500" href="mailto:icarojordano08@gmail.com?" target="blank">Email</a>
                    <a className="hover:text-teal-500" href="https://github.com/IcaroJordano" target="blank">Github</a>
                    <a className="hover:text-teal-500" href="https://www.linkedin.com/in/icaro-jordano/" target="blank">Linkedin</a>
                </div>
                <h2 className="text-sm text-gray-400/90"> © 2024 Icaro Jordano. All rights reserved.</h2>
            </div>

        </footer>
    )
}