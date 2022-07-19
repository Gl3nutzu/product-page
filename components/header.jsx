import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.svg"
import Menu from "../images/icon-menu.svg"
import Close from "../images/icon-close.svg"
import Cart from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"
import { useState } from "react";

const header = () => {

    const [open, setOpen] = useState(0);
    const [cartopen, setCartOpen] = useState(0);
    

    return (
        <div className="flex p-4 justify-between md:mx-16 md:border-gray-300 md:border-b-2 md:pb-8">
            <div className="flex items-center">
                <button onClick={() => setOpen(!open)} className="md:hidden mr-6 z-50">
                    <Image src={open ? Close : Menu} layout="fixed"></Image>
                </button>
                <Image src={Logo} layout="fixed"></Image>
                <ul className={`${open ? "absolute bg-white left-0 pl-[2rem] pr-[12rem] font-bold" : "hidden"} pt-[14rem] z-40 md:pt-0 md:pl-0 md:pr-0 md:static md:flex md:justify-between md:gap-6 md:ml-12 md:text-gray-400 md:font-normal`}>
                    <li className={`${open ? "mb-2" : ""} md:mb-0`}><a href="/">Collections</a></li>
                    <li className={`${open ? "mb-2" : ""} md:mb-0`}><a href="/">Man</a></li>
                    <li className={`${open ? "mb-2" : ""} md:mb-0`}><a href="/">Women</a></li>
                    <li className={`${open ? "mb-2" : ""} md:mb-0`}><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="mr-4 flex gap-8 items-center">
                <div>
                    <button onClick={() => setCartOpen(!cartopen)}>
                        <Image src={Cart} layout="fixed"></Image>
                    </button>
                    <div className={`${cartopen ? "flex flex-col absolute w-[90%] mx-[5%] md:right-0 md:w-[25rem] bg-white rounded-xl z-30 left-0 md:left-auto translate-y-8 md:translate-y-6 drop-shadow-[0_20px_20px_rgb(0,0,0,0.3)]" : "hidden"}`}>
                        <h1 className="font-bold my-4 ml-4">Cart</h1>
                        <hr />
                        <div className="min-h-[10rem] flex justify-center items-center">
                            <h3 className="text-gray-500 font-bold">Your cart is empty.</h3>
                        </div>
                    </div>
                </div>
                <button onClick={() => setCartOpen(!cartopen)}>
                    <Image src={Avatar} width={35} height={35}></Image>
                </button>
            </div>
        </div>
    );
}

export default header;