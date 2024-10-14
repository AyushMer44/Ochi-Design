import React from 'react'

function About() {
    return (
        <div className='w-full p-14 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa deserunt, enim impedit ipsam nostrum optio quibusdam quos rem! Alias eius hic iste laboriosam maiores nam nobis odit placeat temporibus!</h1>
            <div className="w-full flex border-t-[1px] gap-5 mt-10 border-amber-700">
                <div className='w-1/2 mt-4'>
                    <h1 className='text-7xl'>Our Approach</h1>
                    <button className='flex gap-8 items-center px-10 py-6 mt-6 bg-zinc-900 rounded-full text-white'>Read More
                        <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                    </button>

                </div>
            
            </div>
        </div>
    )
}

export default About
