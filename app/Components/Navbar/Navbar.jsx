"use client"

import React, { useState } from "react";
import "./Navbar.scss";
import Image from "next/image";
import logo from "../../assests/logo.svg";
import ukFlag from "../../assests/uk-flag.webp";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div className="navbar">
            <div className="inside-navbar-div">
                <div className="left-navbar">
                    <Link href="/" className="logo-container">
                        <Image src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <div className="right-navbar">
                    <div className="flag-container">
                        <Image src={ukFlag} alt="uk-logo" className="uk-flag" />
                    </div>
                    <div className="person-container ">
                        <GoPerson className="person-icon" />
                        <IoIosArrowDown className="down-icon" />
                        <div className="login-box">
                            <Link href="/" className="login-box-text">Login</Link>
                            <Link href="/" className="login-box-text">Help</Link>
                        </div>
                    </div>
                    <div className="shopping">
                        <MdOutlineShoppingCart className="shopping-icon" />
                        <span className="cart-items">0</span>
                    </div>

                    <div onClick={toggleMenu} className="hamburger-menu">
                        {
                            openMenu ? <RxCross2 className="menu-icon" /> : <FiMenu className="menu-icon" />
                        }
                    </div>

                    {
                        openMenu && <div className="phone-login-box">
                            <Link href="/" className="phone-login-text">Login</Link>
                            <Link href="/" className="phone-login-text">Help</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
