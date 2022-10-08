import React from 'react';
import './index.scss';
import banner from '../../../assets/images/Banner1.png';

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div className='banner__container'>
                    <div className='banner__content'>
                        <h1>Explore More Than</h1>
                        <h1>1000+ Jobs</h1>
                        <p>Lorem ipsum dolor sit amet. Ea possimus suscipit</p>
                        <p>impedit sit suscipit repudiance qui error.</p>
                    </div>
                    <div className='banner__image'>
                        <img src={banner} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;