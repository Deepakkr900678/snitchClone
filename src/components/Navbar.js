import React, { useState } from 'react';
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import HeaderSlider from "./HeaderSlider";
import { CiUser } from "react-icons/ci";
import { PiBagSimpleLight } from "react-icons/pi";
import {
    RxHamburgerMenu,
    RxMagnifyingGlass,
    RxHeart,
    RxCamera,
    RxInstagramLogo,
    RxLinkedinLogo,
    RxTwitterLogo,
} from "react-icons/rx";
import { FaPinterest, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="flex flex-col w-full fixed top-0 bg-white">
                <HeaderSlider />
                <div className="flex justify-between items-center px-10 py-5">
                    <div className="text-black text-3xl">
                        <RxHamburgerMenu onClick={toggleMenu} />
                    </div>

                    <div className='ml-40'>
                        <Link to="/">
                            <img src={logo} alt="" className='w-60' />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center text-black text-3xl gap-4">
                        <Link to="/login">
                            <CiUser />
                        </Link>
                        <RxMagnifyingGlass />
                        <RxHeart />
                        <PiBagSimpleLight />
                    </div>
                </div>
            </div>

            {/* <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="w-full text-gray-500 bg-white fixed top-0 left-0 h-full overflow-y-auto">
                    <div className="w-full flex justify-between items-center px-7 py-5">
                        <div className="flex items-center gap-2 text-2xl">
                            <FaCircleUser />
                            <h1 className="text-xl">Log In</h1>
                        </div>
                        <div>
                            <button
                                className="close text-xl text-gray-500"
                                onClick={toggleMenu}
                            >
                                X
                            </button>
                        </div>
                    </div>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">NEW ARRIVALS</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">BEST SELLING</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">SNITCH LUXE</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">SUITS & BLAZERS</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">SHOP</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">TRACK ORDER</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">
                        AFFILIATE PROGRAM
                    </h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">CUSTOM SUPPORT</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">VISIT STORE</h1>
                    <hr className="text-black" />
                    <h1 className="text-xl px-7 py-5 tracking-widest">RELOVE</h1>
                    <hr className="text-black" />
                    <div className="flex flex-wrap">
                        <div className="border py-4 px-9">
                            <RxInstagramLogo className="text-3xl text-black" />
                        </div>
                        <div className="border py-4 px-9">
                            <RxLinkedinLogo className="text-3xl text-black" />
                        </div>
                        <div className="border py-4 px-10">
                            <RxTwitterLogo className="text-3xl text-black" />
                        </div>
                        <div className="border py-4 px-9">
                            <FaPinterest className="text-3xl text-black" />
                        </div>
                        <div className="border py-4 px-9">
                            <FaFacebook className="text-3xl text-black" />
                        </div>
                        <div className="border py-4 px-10">
                            <FaYoutube className="text-3xl text-black" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
