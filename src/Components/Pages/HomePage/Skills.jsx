import { FaReact,FaSass,FaBootstrap,FaGitAlt ,FaGithub } from "react-icons/fa";
import Skill from './Skill';

import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill ,RiJavascriptFill } from "react-icons/ri";

const Skills =()=>{



    return (
        <div className=" mx-auto w-11/12   flex flex-wrap justify-around">

            <Skill title='React'>
                <FaReact className='text-blue-400 h-16 lg:h-24 w-full'/>
            </Skill> 
            <Skill title='Sass'>   
                <FaSass className='text-pink-400 h-16 lg:h-24 w-full'/>
            </Skill> 
            <Skill title='Bootstrap'>
                <FaBootstrap className='text-purple-600 h-16 lg:h-24 w-full'/>
            </Skill> 
            <Skill title='Tailwind'>
                <RiTailwindCssFill className='text-blue-400 h-16 lg:h-24 w-full'/>
            </Skill> 
            <Skill title='Javascript'>
                <RiJavascriptFill className='text-amber-400 h-16 lg:h-24 w-full'/>
            </Skill> <Skill title='Git'>
                <FaGitAlt className='text-orange-500 h-16 lg:h-24 w-full'/>
            </Skill> 
            <Skill title='Github'>
                <FaGithub className='text-black  h-16 lg:h-20 w-full'/>
            </Skill> 
            <Skill title='React'>
                <SiTypescript className='text-blue-500 h-16 lg:h-24 w-full'/>
            </Skill> <Skill title='React'>
                <SiTypescript className='text-blue-500 h-16 lg:h-24 w-full'/>
            </Skill> <Skill title='React'>
                <SiTypescript className='text-blue-500 h-16 lg:h-24 w-full'/>
            </Skill> 
        </div>
    )
}

export default Skills