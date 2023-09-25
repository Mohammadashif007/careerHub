import React from 'react';
import BannerImg from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='flex justify-between gap-3 items-center mt-10'>
            <div className='text-start'>
                <h1 className='text-5xl font-bold'>One Step <br /> Close To Your <br /> Dream Job</h1>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut soluta iste debitis repellendus placeat. Expedita assumenda illo repudiandae similique?</p>
                <button className='border px-3 py-2 bg-[#6499E9] text-white rounded'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={BannerImg} alt="img" />
            </div>
        </div>
    );
};

export default Banner;