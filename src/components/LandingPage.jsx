import React from 'react'
import {FaArrowCircleRight} from "react-icons/fa";
import {motion} from "framer-motion";

function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textStructure mt-32 px-20'>
                {
                    ["We Create",
                    "Eye Opening",
                    "Presentations"]
                        .map((item,index) => {
                            return <div className='masker'>
                                <div className="w-fit h-[6vw] flex items-end overflow-hidden">
                                    {index === 1  && (
                                        <motion.div initial={{ width: 0 }} animate={{width: "6vw"}}
                                                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                                                    className="w-[6vw] h-[4.1vw] bg-green-500 relative rounded-md mr-3"></motion.div>
                                    )}
                                    <h1 className='uppercase font-["Founders_Grotesk_X-Condensed"] font-bold h-[8vw] text-[6vw] pt-[2vw] -mb-[1vw] leading-[1] tracking-tighter'>{item}</h1>
                                </div>
                            </div>
                        })
                }
                {/*<div className='masker uppercase font-["Founders_Grotesk"] text-8xl leading-[5.5vw] tracking-tighter font-medium'>*/}
                {/*    <h1>We Create</h1>*/}
                {/*</div>*/}
                {/*<div className='masker uppercase font-["Founders_Grotesk"] text-8xl leading-[5.5vw] tracking-tighter font-medium'>*/}
                {/*    <h1>Eye Opening</h1>*/}
                {/*</div>*/}
                {/*<div className='masker uppercase font-["Founders_Grotesk"] text-8xl leading-[5.5vw] tracking-tighter font-medium'>*/}
                {/*    <h1>Presentations</h1>*/}
                {/*</div>*/}
            </div>

            <div className='border-t-[1px] border-zinc-500 mt-12 flex justify-between items-center py-5 px-10'>
                {
                    ["For public and private companies",
                    "From the first pitch to IPO."]
                        .map((item,index) =>
                        <p className="text-md font-light tracking-tight leading-none">
                            {item}
                        </p>
                        )
                }
                <div className="start flex items-center gap-5">
                    <div className="px-4 py-2 border-2 border-gray-200 rounded-full uppercase">Start the Project</div>
                    <div className="w-10 h-10 border-2 border-gray-200 rounded-full flex items-center justify-center">
                        <span className='-rotate-45'>
                            <FaArrowCircleRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
