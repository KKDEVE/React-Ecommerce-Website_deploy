import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        With attention to detail and quality craftsmanship, EyesOnPrizes offers fashion-forward pieces that elevate your wardrobe and inspire you to conquer the world with style.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        For inquiries or assistance, please reach out to our customer support team. We're here to provide you with exceptional service and support for all your fashion needs.
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">EyesOnPrize</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
