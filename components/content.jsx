import p1 from "../images/image-product-1.jpg"
import p2 from "../images/image-product-2.jpg"
import p3 from "../images/image-product-3.jpg"
import p4 from "../images/image-product-4.jpg"
import p11 from "../images/image-product-1-thumbnail.jpg"
import p22 from "../images/image-product-2-thumbnail.jpg"
import p33 from "../images/image-product-3-thumbnail.jpg"
import p44 from "../images/image-product-4-thumbnail.jpg"
import Logo from "../images/logo.svg"
import Menu from "../images/icon-menu.svg"
import Close from "../images/icon-close.svg"
import Cart from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"
import cart from "../images/icon-cart-white.svg"
import nextarr from "../images/icon-next.svg"
import prev from "../images/icon-previous.svg"
import dcart from "../images/icon-delete.svg"

import Image from "next/image";
import { useState } from "react"

const content = () => {
    
    const [count, setCount] = useState(1);
    const [photo, setPhoto] = useState(p1);
    const [items, setItems] = useState(0);
    const [open, setOpen] = useState(0);
    const [cartopen, setCartOpen] = useState(0);
    const [cartitems, setCartItems] = useState(0);

    const slide = (val) => {
        let x = count+val;
        switch(x) {
            case 0: {
                setPhoto(p4);
                setCount(4);
                break;
            }
            case 1: {
                setPhoto(p1);
                setCount(1);
                break;
            }
            case 2: {
                setPhoto(p2);
                setCount(2);
                break;
            }
            case 3: {
                setPhoto(p3);
                setCount(3);
                break;
            }
            case 4: {
                setPhoto(p4);
                setCount(4);
                break;
            }
            case 5: {
                setPhoto(p1);
                setCount(1);
                break;
            }
        }
    }

    return (
        <>
            <div className="flex h-20 p-4 md:p-0 justify-between md:mx-16 md:border-gray-300 md:border-b-2">
                <div className="flex items-center">
                    <button onClick={() => setOpen(!open)} className="md:hidden mr-6 z-50">
                        <Image src={open ? Close : Menu} layout="fixed"></Image>
                    </button>
                    <Image src={Logo} layout="fixed"></Image>
                    <ul className={`${open ? "absolute bg-white left-0 pl-[2rem] pr-[12rem] font-bold" : "hidden"} pt-[14rem] z-40 md:pt-0 md:pl-0 md:pr-0 md:static md:flex md:justify-between md:gap-6 md:ml-12 md:text-gray-400 md:font-normal`}>
                        <li className={`${open ? "mb-2" : ""} md:mb-0 md:hover:text-black md:hover:border-b-2 md:hover:border-orange-400`}><a href="/">Collections</a></li>
                        <li className={`${open ? "mb-2" : ""} md:mb-0 md:hover:text-black md:hover:border-b-2 md:hover:border-orange-400`}><a href="/">Man</a></li>
                        <li className={`${open ? "mb-2" : ""} md:mb-0 md:hover:text-black md:hover:border-b-2 md:hover:border-orange-400`}><a href="/">Women</a></li>
                        <li className={`${open ? "mb-2" : ""} md:mb-0 md:hover:text-black md:hover:border-b-2 md:hover:border-orange-400`}><a href="/">About</a></li>
                        <li className="md:hover:text-black md:hover:border-b-2 md:hover:border-orange-400"><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="mr-4 flex gap-8 items-center">
                    <div>
                        <button onClick={() => setCartOpen(!cartopen)}>
                            <Image src={Cart} layout="fixed"></Image>
                            {cartitems ? <span className="bg-orange-500 rounded-lg text-xs absolute w-[1.5rem] text-white font-medium -translate-x-1/3 -translate-y-1/3">{cartitems}</span> : ""}
                        </button>
                        <div className={`${cartopen ? "flex flex-col absolute w-[90%] mx-[5%] md:right-0 md:w-[25rem] bg-white rounded-xl z-30 left-0 md:left-auto translate-y-8 md:translate-y-6 drop-shadow-[0_20px_20px_rgb(0,0,0,0.3)]" : "hidden"}`}>
                            <h1 className="font-bold my-4 ml-4">Cart</h1>
                            <hr />
                            {!cartitems ? 
                                <div className="min-h-[10rem] flex justify-center items-center">
                                    <h3 className="text-gray-500 font-bold">Your cart is empty.</h3>
                                </div>
                                : 
                                <div className="p-6">
                                    <div className="flex justify-between">
                                        <Image src={p11} width={50} height={50} objectFit="contain" className="rounded-lg"></Image>
                                        <div>
                                            <h1 className="text-gray-400">Fall Limited Edition Sneakers</h1>
                                            <h3 className="text-gray-400">$125.00 x {cartitems} <span className="text-black font-bold">${125*cartitems}.00</span></h3>
                                        </div>
                                        <button onClick={() => setCartItems(0)}>
                                            <Image src={dcart} layout="fixed"></Image>
                                        </button>
                                    </div>
                                    <button className="bg-orange-500 text-white mt-6 w-full py-4 rounded-lg">Checkout</button>
                                </div>
                            }
                            
                        </div>
                    </div>
                    <button onClick={() => setCartOpen(!cartopen)}>
                        <Image src={Avatar} width={35} height={35} className={`${cartopen ? "border-[2px] border-orange-400 debug" : ""} rounded-full`}></Image>
                    </button>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:my-20 md:mx-8 z-30">
                <div className="relative grid items-center">
                    <div className="md:grid md:justify-center">
                        <Image className="md:rounded-2xl" src={photo} width={380} height={380} layout={"responsive"}></Image>
                        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-1 md:gap-3 md:mt-6">
                            <button onClick={() => {setPhoto(p1); setCount(1)}}>
                                <Image src={p11} width={80} height={80} objectFit="contain" className={`${count === 1 ? "md:border-[2px] md:border-orange-400 debug" : ""} md:rounded-2xl`}></Image>
                            </button>
                            <button onClick={() => {setPhoto(p2); setCount(2)}}>
                                <Image src={p22} width={80} height={80} objectFit="contain" className={`${count === 2 ? "md:border-[2px] md:border-orange-400 debug" : ""} md:rounded-2xl`}></Image>
                            </button>
                            <button onClick={() => {setPhoto(p3); setCount(3)}}>
                                <Image src={p33} width={80} height={80} objectFit="contain" className={`${count === 3 ? "md:border-[2px] md:border-orange-400 debug" : ""} md:rounded-2xl`}></Image>
                            </button>
                            <button onClick={() => {setPhoto(p4); setCount(4)}}>
                                <Image src={p44} width={80} height={80} objectFit="contain" className={`${count === 4 ? "md:border-[2px] md:border-orange-400 debug" : ""} md:rounded-2xl`}></Image>
                            </button>
                        </div>
                    </div>
                    <div className="absolute flex w-full justify-between md:hidden">
                        <button onClick={() => slide(-1)} className="bg-white w-10 h-10 rounded-full flex justify-center items-center ml-4">
                            <Image src={prev} layout={"fixed"}></Image>
                        </button>
                        <button onClick={() => slide(+1)} className="bg-white w-10 h-10 rounded-full flex justify-center items-center mr-4">
                            <Image src={nextarr} layout={"fixed"}></Image>
                        </button>
                    </div>
                </div>
                <div className="md:mr-40">
                    <div className="p-6">
                        <h2 className="text-orange-400 font-bold">SNEAKER COMPANY</h2>
                        <h1 className="font-semibold text-4xl md:text-5xl md:font-bold mt-2">Fall Limited Edition Sneakers</h1>
                        <p className="text-gray-500 mt-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll witherstand everything the weather can offer.</p>
                        <div className="flex md:block items-center justify-between mt-4">
                            <div className="flex items-center">
                                <h1 className="font-bold text-4xl">$125.00</h1>
                                <h2 className="font-bold text-lg text-orange-400 bg-orange-100 px-2 rounded-md ml-4">50%</h2>
                            </div>
                            <h2 className="font-semibold text-lg text-gray-300 line-through">$250.00</h2>
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="flex justify-center md:w-2/6">
                            <div className="bg-gray-100 w-10/12 rounded-xl py-2 md:py-0 flex justify-between items-center">
                                <button onClick={() => items ? setItems(items-1) : setItems(0)} className="font-black text-orange-400 active:text-orange-200 ml-4 text-3xl">-</button>
                                <h1 className="font-bold text-xl">{items}</h1>
                                <button onClick={() => setItems(items+1)} className="font-black text-orange-400 active:text-orange-200 mr-4 text-3xl">+</button>
                            </div>
                        </div>
                        <button onClick={() => setCartItems(cartitems+items)} className="flex justify-center bg-orange-400 text-white w-10/12 md:w-4/6 m-auto my-6 md:my-0 rounded-xl py-4 gap-4 drop-shadow-[0_20px_20px_rgb(255,126,0,0.2)] active:bg-orange-200">
                            <Image src={cart} layout={"fixed"}></Image>
                            <h1 className="font-semibold">Add to cart</h1>
                        </button>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default content;