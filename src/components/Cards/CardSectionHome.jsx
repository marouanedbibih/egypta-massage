import React from 'react'
import CardImage from '../Home/CardImage';
import HomeServices from '../../constants/homeService';
function CardSectionHome() {
    return (
        <section className="mt-48 md:mt-40 pb-40 relative bg-service-home">
            <div
                className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                style={{ transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-black fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 md:w-full'>

                <CardImage
                    card={HomeServices[0]}
                    class="md:-mt-32 mt-16"
                />
                <CardImage
                    card={HomeServices[1]}
                    class="md:mt-24 mt-16"
                />
                <CardImage
                    card={HomeServices[2]}
                    class="mt-16"
                />
                <CardImage
                    card={HomeServices[3]}
                    class="md:mt-32 mt-16"
                />
            </div>
            

        </section>)
}

export default CardSectionHome