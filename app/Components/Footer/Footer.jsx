import React from "react";
import "./Footer.scss";
import Image from "next/image";
import headsUpLogo from "@/app/assests/heads-up-logo.webp"
import appStore from "@/app/assests/apple-store.webp"
import googleStore from "@/app/assests/google-store.webp"
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-inner-container">
                <div className="upper-footer">
                    <div className="upper-footer-first-column">
                        <Image src={headsUpLogo} alt="Heads-up Logo" className="heads-up-footer-logo" />
                    </div>

                    <div className="center-columns">
                        <div className="upper-footer-second-column upper-columns">
                            <li className="upper-footer-heading">Company</li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">About us</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Careers</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Help & support</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Contact us</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Lease</Link></li>
                        </div>

                        <div className="upper-footer-third-column upper-columns">
                            <li className="upper-footer-heading">Concepts</li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Floor Board</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">E Poster</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Eye Hologram</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Window Display</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Floor Hologram</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Wall Hologram</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">Till Display</Link></li>
                        </div>

                        <div className="upper-footer-fourth-column upper-columns">
                            <li className="upper-footer-heading">Popular locations</li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">E, London</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">N, London</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">NW, London</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">WC, London</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">W1, London</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">SE, London</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">SW, London</Link></li>
                            <li className="upper-footer-list"> <Link href="/" className="upper-footer-links">W, London</Link></li>
                        </div>
                    </div>

                    <div className="upper-footer-fifth-column upper-columns">
                        <li className="upper-footer-heading">Download our apps</li>
                        <div className="footer-app-img-div">
                            <Image src={appStore} alt="app-store" className="footer-app-img" />
                            <Image src={googleStore} alt="google-store" className="footer-app-img" />
                        </div>
                    </div>
                </div>
                <hr />

                <div className="lower-footer">
                    <p className="copyright-text">©2024 HadsUp Limited. All rights reserved</p>
                    <div className="lower-footer-details copyright">
                        <Link href="/" className="copyright-details">Terms and conditions</Link>
                        <Link href="/" className="copyright-details">Privacy policy</Link>
                        <Link href="/" className="copyright-details">Privacy policy (Data)</Link>
                        <Link href="/" className="copyright-details">Company details</Link>
                    </div>
                    <div className="lower-footer-details">
                        <Link href="/" className="social-links"><IoLogoLinkedin /></Link>
                        <Link href="/" className="social-links"><FaTwitter /></Link>
                        <Link href="/" className="social-links"><FaFacebookF /></Link>
                        <Link href="/" className="social-links"><FaInstagram /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
