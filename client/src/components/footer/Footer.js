import React from 'react';
import "./Footer.css";
import { email, phone } from './icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const copyrightText = `כל הזכויות שמורות © ${currentYear}`;
    return (
        <>

            <div className="dark py-4 text-center">
                <div className="d-flex justify-content-around">
                    <div>
                        <div className="text-decoration-none text-white">
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    {phone}
                                </div>
                                <div>039125706</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-decoration-none text-white">
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    {email}
                                </div>
                                <div>supp0rt@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light text-center">
                <div>{copyrightText}</div>
            </div>

        </>
    );
}

export default Footer;
