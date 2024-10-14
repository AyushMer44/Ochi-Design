import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center gap-10 px-20'>
            <div className="cardContainer h-[50vh] w-1/2">
                <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo"/>
                    <button className='absolute px-3 py-1 border-2 rounded-full left-10 bottom-10'>&copy;2024</button>
                </div>
            </div>
            <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
                <div className="card rounded-xl relative flex items-center justify-center w-1/2 h-full bg-[#557c1f]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo"/>
                    <button className='absolute px-3 py-1 border-2 rounded-full left-10 bottom-10'>&copy;2024</button>
                </div>
                <div className="card rounded-xl flex relative items-center justify-center w-1/2 h-full bg-[#557c1f]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Logo"/>
                    <button className='absolute px-3 py-1 border-2 rounded-full left-10 bottom-10'>&copy;2024</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
