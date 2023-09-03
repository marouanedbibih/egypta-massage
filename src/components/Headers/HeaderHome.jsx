import React from 'react'
import constants from '../../constants/text.js'
import { Link } from 'react-router-dom'
function HeaderHome() {
    return (
        <section className="header bg-home relative pt-16 items-center flex h-screen max-h-860-px">
            <div className="container mx-auto items-center flex flex-wrap">
                <div className="w-full text-white z-10 md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                    <div className="pt-32 sm:pt-0">
                        <h2 className="font-semibold font-lato text-6xl text-blueGray-600">
                            {constants.header.title}
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                            {constants.header.paragraphe}
                        </p>
                        <div className="mt-12">
                            <Link
                                to="/reservation"
                                className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-300 active:bg-orange-200 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                                Reservation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderHome