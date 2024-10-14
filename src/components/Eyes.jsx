import React, {useEffect, useState} from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove",(e) => {
            // console.log(e.clientX,e.clientY);
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            /* Hume difference nikalna hai with the help of deltaX and deltaY..*/
            /*innerWidth(1000px)/2 and innerHeight/2 se screen ka center nikal jaayega...*/

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            // 180/Math.PI equals 57.29 which gives the same value of degree by converting 1 radian which is 57.29
            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);

            setRotate(angle-180);
        })
    })

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed='-.7' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex items-center justify-center w-[12vw] rounded-full h-[12vw] bg-zinc-100'>
                        <div className='relative justify-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-7'>
                                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[12vw] rounded-full h-[12vw] bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg`}}
                                 className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-7'>
                                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
