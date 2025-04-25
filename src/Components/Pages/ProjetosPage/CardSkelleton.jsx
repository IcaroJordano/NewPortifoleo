
export function CardSkelleton() {
    return (
        <div className="w-11/12 lg:w-[300px]  mb-20  rounded-xl transition-all duration-500 bg-zinc-800 dark:bg-slate-200 dark:border border-neutral-400/20">
            <div className="w-full h-48 rounded-tl-2xl p-2">
                <div className="object-cover h-full rounded-t-xl bg-zinc-700 " ></div> 
            </div>
            <div  className="w-full dark:text-neutral-700 text-neutral-300 py-4">
            <div className="flex items-center ps-2">
            <p className="text-nowrap p-2 overflow-clip text-ellipsis w-11/12 bg-zinc-700"> </p>

            </div>
                <div className="flex text-sm pt-2 text-neutral-300 dark:text-white ps-1 ">
                    <span className="p-2 px-8 w3/12  bg-zinc-700 rounded-md  px1 mx-1"></span>
                    <span className="p-2 px-8 w3/12  bg-zinc-700 rounded-md  px1 mx-1"></span>
                    <span className="p-2 px-8 w3/12  bg-zinc-700 rounded-md  px1 mx-1"></span>
                </div>
            </div>
        </div>
    )
}