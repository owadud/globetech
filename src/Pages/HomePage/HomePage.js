import React from 'react';
import Header from '../Header/Header';
import './HomePage.css';
import Group1 from '../../Images/Group1.png'
import plane from '../../Images/plane.png'
const HomePage = () => {
    return (
        <>
            <Header></Header>
            <div className="min-h-screen bg-blue w-full">
                <div className='plane pt-10 container mx-auto'>
                  <div className='home-plane'><img src={plane} alt='plane' /></div>  
                </div>
                <div className="hero">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Group1} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                        <div className='homepage-title w-2/3'>
                            <h1 className="text-5xl font-bold">Welcome to</h1>
                            <h2 className="text-5xl font-bold">GlobeTech</h2>
                            <p className="py-6">We are committed to deliver <span className="best-it">best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
                            <button className="btn btn-color">Support us</button>
                            <button className="btn btn-mission bg-blue">Our Mission</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;