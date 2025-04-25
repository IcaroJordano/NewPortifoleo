const Skill = ({title,children})=>{
    return(
        <div className="w-20 lg:w-1/5 my-3 lg:my-8">
            {children}
            <p className=' my-2 text-center  text-neutral-200 dark:text-neutral-700'>{title}</p>
        </div>
    )
}

export default Skill