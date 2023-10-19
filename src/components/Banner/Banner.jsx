import React from 'react'
import bannerImage from '../../assets/images/Image.png'

const Banner = () => {
    return (
        <div className='flex flex-row items-center'>
            <div className="w-full">
                <h4 className="font-great-vibes text-heading-4 text-primary-2">Its Quick & Amusing!</h4>
                <h2 className="">
                    <span className='text-primary-2'>Th</span>e Art of speed<br></br> food Quality

                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue</p>
                <button className='bg-primary-2 px-10 py-3 rounded-full'>See Menu</button>
            </div>
            <div className="w-full">
                <img src={bannerImage} alt="" />          </div>
        </div>
    )
}

export default Banner