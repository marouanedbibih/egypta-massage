import React from 'react'
import { Link } from 'react-router-dom';

function CardImage(props) {
    return (
        <div className={`w-10/12 md:w-8/12 lg:w-8/12 px-12 md:px-4 mr-auto ml-auto ${props.class}`}>
            <Link
                to={props.card.linkTo}
                className="relative flex flex-col min-w-0 break-words bg-orange-300 w-full mb-6 shadow-lg rounded-lg hover:scale-105 duration-700">
                <img
                    alt={props.card.alt}
                    src={props.card.src}
                    className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                    <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                        {props.card.title}
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                        {props.card.description}
                    </p>
                </blockquote>
            </Link>
        </div>
    )
}

export default CardImage;