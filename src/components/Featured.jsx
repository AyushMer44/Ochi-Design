import React, {useState} from 'react'
import {motion} from "framer-motion";

function Featured() {

    const [isHovering, setIsHovering] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return (
        <div className='w-full py-14 bg-gray-700'>
            <div className='w-full px-14 border-b-[1px] border-zinc-700 pb-14'>
                <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">Featured Projects</h1>
            </div>

            <div className='px-20'>
                <div className='cards w-full flex mt-10'>
                    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                        <h1 className='absolute flex overflow-hidden text-yellow-400 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl'>
                            {"FYDE".split("").map((item,index) => (
                                <motion.span className="inline-block" initial={{y: "100%"}}
                                             animate={isHovering ? ({y: "0"}) : ({y: "100%"})}
                                             transition={{ease: [0.22,1,0.36,1], delay: index*.06}}
                                >{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full bg-green-600 rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover'
                                 src="https://images.unsplash.com/photo-1728745045653-62547cd2294c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
                                 alt="Image1"/>
                        </div>
                    </div>
                    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='cardcontainer relative w-1/2 h-[80vh]'>
                        <h1 className='absolute flex overflow-hidden right-full text-yellow-400 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl'>
                            {"VISE".split("").map((item,index) => (
                                <motion.span className="inline-block" initial={{y: "100%"}}
                                             animate={isHover ? ({y: "0"}) : ({y: "100%"})}
                                             transition={{ease: [0.22, 1, 0.36, 1], delay: index * .06}}
                                >{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full bg-green-600 rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover'
                                 src="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9vbnxlbnwwfHwwfHx8MA%3D%3D"
                                 alt="Image2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
