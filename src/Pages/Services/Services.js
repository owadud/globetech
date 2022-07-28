import React from 'react'
import Header from '../Header/Header';
import s1 from '../../Images/s1.png'
import s2 from '../../Images/s2.png'
import s3 from '../../Images/s3.png'
import s4 from '../../Images/s4.png'
import s5 from '../../Images/s5.png'
import s6 from '../../Images/s6.png'
import plane from '../../Images/plane.png'
import './Services.css';


const Services = () => {
    return (
        <>
            <Header></Header>
            <div className="bg-blue pb-9 services">
                <div className='container mx-auto'>
                    <div className='service-plane pt-10 container w-full mx-auto'>
                        <div className='plane-move'> <img  src={plane} alt='plane' /></div>
                       
                    </div>
                    <div className='text-center pt-12 text-white'>
                        <h1 className='text-3xl'>Services</h1>
                        <h1 className='text-4xl'>We provide services to our clients</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-20'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={s1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-indigo">Software Solution</h2>
                                <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                                <div className="card-actions">
                                    <button className="btn bg-indigo w-56">More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={s2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-indigo">E-commerce Solution</h2>
                                <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                                <div className="card-actions">
                                    <button className="btn bg-indigo w-56">More</button>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={s3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-indigo">ERP Solution</h2>
                                <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                                <div className="card-actions">
                                    <button className="btn bg-indigo w-56">More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={s4} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-indigo">Bulk SMS Service</h2>
                                <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                                <div className="card-actions">
                                    <button className="btn bg-indigo w-56">More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={s5} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-indigo">Graphic Design</h2>
                                <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                                <div className="card-actions">
                                    <button className="btn bg-indigo w-56">More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={s6} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-indigo">Digital Marketing</h2>
                                <p className='text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                                <div className="card-actions">
                                    <button className="btn bg-indigo w-56">More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
