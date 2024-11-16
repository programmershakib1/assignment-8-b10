import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import { getAllCart, getAllWish } from "../../utilities";

// eslint-disable-next-line react-refresh/only-export-components
export  const CountContext = createContext();

const MainLayout = () => {
    const {pathname} = useLocation();
    const [carts, setCarts] = useState([]);
    const [wishes, setWishes] = useState([]);

    const handleCount = () => {
        const allCart = getAllCart();
        setCarts(allCart);
        const allWish = getAllWish();
        setWishes(allWish);
    }

    useEffect(() => {
        const allCart = getAllCart();
        setCarts(allCart);
        const allWish = getAllWish();
        setWishes(allWish);
    },[])

    return (
        <div>
            <CountContext.Provider value={{handleCount, carts, wishes}}>
            <div className={`${pathname == '/'|| pathname == '/category/All%20Product' || pathname =='/category/Laptops' || pathname == '/category/Phones' || pathname == '/category/Accessories' || pathname == '/category/Watches' || pathname == '/category/MacBook' || pathname == '/category/Iphone'? 'bg-main md:pt-10 font-sora':'pt-0 font-sora'}`}>
                <Toaster></Toaster>
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-white">
                <Footer></Footer>
            </div>
            </CountContext.Provider>
        </div>
    );
};

export default MainLayout;