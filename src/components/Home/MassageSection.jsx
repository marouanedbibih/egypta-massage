import React from 'react'
import { Link } from 'react-router-dom'

function MassageSection() {
    return (
        <div class="relative  my-4 flex w-full max-w-[56rem] flex-row rounded-xl bg-orange-300 bg-clip-border text-gray-950 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-orange-300 bg-clip-border text-gray-950">
                <img
                    src="../../../public/img/services/15.jpg"
                    alt="image"
                    class="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
            </div>
            <div class="p-6">
                <h6 class="mb-4 block font-lato text-base font-semibold uppercase leading-relaxed tracking-normal text-gray-950 antialiased">
                    Massage Marocain
                </h6>
                <p class="mb-8 block font-lato text-base font-normal leading-relaxed text-gray-950 antialiased">
                    Like so many organizations these days, Autodesk is a company in
                    transition. It was until recently a traditional boxed software company
                    selling licenses. Yet its own business model disruption is only part of
                    the story
                </p>
                <div class=" w-full grid grid-cols-1 justify-items-center content-center  select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-lato text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    <div className='w-2/3 flex justify-between items-center text-base py-1'>
                        <span>30 min</span>
                        <span>€ 50</span>
                    </div>
                    <div className='w-2/3 flex justify-between items-center text-base py-1'>
                        <span>30 min</span>
                        <span>€ 50</span>
                    </div>
                    <div className='w-2/3 flex justify-between items-center text-base py-1'>
                        <span>30 min</span>
                        <span>€ 50</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MassageSection