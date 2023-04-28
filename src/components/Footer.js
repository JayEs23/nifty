/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';


const Footer = () => {
   
    return (
        <><footer className="bg-dark p-2">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-4 ">
                        <div className="text-center text-md-start mb-0 mb-md-0">
                            <Link href="/">
                                <img className="h-30px" src="static/images/NiftyLogo2.png" alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="text-muted text-primary-hover"> Copyrights ©2023 <a href="https://www.niftyrow.io/" className="text-muted">NiftyRow</a>. </div>
                    </div>

                    <div className="col-md-4">
                        <ul className="list-inline mb-0 text-center text-md-end">
                            <li className="list-inline-item ms-2"><a href="#"><i className="text-white fab fa-facebook"></i></a></li>
                            <li className="list-inline-item ms-2"><a href="#"><i className="text-white fab fa-instagram"></i></a></li>
                            <li className="list-inline-item ms-2"><a href="#"><i className="text-white fab fa-linkedin-in"></i></a></li>
                            <li className="list-inline-item ms-2"><a href="#"><i className="text-white fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer><div className="back-top"></div></>

    );
};

export default Footer;
