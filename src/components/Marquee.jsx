import {motion} from "framer-motion";

function Marquee(){
    return(
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='text-black w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap text-white'>
                <motion.h1 intitial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 5, repeat: Infinity}} className='text-[12vw] leading-none font-semibold uppercase px-4 tracking-tighter'>We are Ochi.</motion.h1>
                <motion.h1 intitial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 5, repeat: Infinity}} className='text-[12vw] leading-none font-semibold uppercase px-4 tracking-tighter'>We are Ochi.</motion.h1>
                <motion.h1 intitial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: "linear", duration: 5, repeat: Infinity}} className='text-[12vw] leading-none font-semibold uppercase px-4 tracking-tighter'>We are Ochi.</motion.h1>
            </div>
        </div>
    )
}

export default Marquee