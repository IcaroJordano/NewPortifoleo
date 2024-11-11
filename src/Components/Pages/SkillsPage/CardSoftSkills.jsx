export function CardSoftSkills({ texto, titulo, children }) {
    return (
        <div className="w-52 lg:w-1/4 h-52 lg:h-64 mt-2 mr-8 mb-10  rounded-lg flex items-center bg-neutral-100 shadow-md shadow-blue-800 ">
            <div className="w-11/12 mx-auto  ">
                <icon className="text-4xl">{children}</icon>
                <h2 className="font-bold text-2xl text-nowrap overflow-clip">{titulo}</h2>
                <p  className="text-neutral-500 my-1 text-sm">{texto}</p>
            </div>
        </div>
    )
}