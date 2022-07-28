import React from 'react';
import './Login.css';
import homearrow from '../../Images/home-arrow.png';
import { Link } from 'react-router-dom';
import Eye from '../../Images/Eye.png';
const Login = () => {
    return (
        <div className="hero min-h-screen w-full login-page-background flex">
            
            <div className="text-center  w-1/4 min-h-screen login-background pt-24">
                    <h1 className="text-4xl font-bold">GlOBETECH</h1>
                    <h1 className="text-4xl font-bold">COMPANY LIMITED</h1>
                    <p className="py-6">Make yourself digitalized and more effecient</p>
                    <div className='home-arrow flex justify-center'>
                           <Link to='/'><img src={homearrow} alt="" /></Link> 
                    </div>
                </div>
                <div className="card w-3/4 max-w-sm mx-auto shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className='text-center welcome'>
                        <h1 className='text-2xl'>Welcome</h1>
                        <p>Sign in to your account</p>
                        </div>
                        
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Password</span>
                            </label> */}
                            <input type="text" placeholder="password" className="input input-bordered"
                             
                            /> 
                            <button className='absolute right-10 eye'>
                                <img src={Eye} alt="eye" />
                            </button>
                           
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn login">Login</button>
                        </div>
                    </div>
                </div>

                
            
        </div>
    );
};

export default Login;