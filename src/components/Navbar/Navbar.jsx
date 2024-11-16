import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CountContext } from "../Layouts/MainLayout";

const Navbar = () => {
    const {pathname} = useLocation();

    const {carts, wishes} = useContext(CountContext);

    return (
        <div className={`${pathname == '/'|| pathname == '/category/All%20Product' || pathname =='/category/Laptops' || pathname == '/category/Phones' || pathname == '/category/Accessories' || pathname == '/category/Watches' || pathname == '/category/MacBook' || pathname == '/category/Iphone'?'lg:px-20 md:px-10 mx-2 md:mx-0 bg-primary rounded-t-3xl':'bg-white lg:px-20 md:px-10 mx-2 md:mx-0'}`}>
            <div className="py-10 flex flex-col lg:flex-row md:flex-row justify-between gap-5 md:gap-0 items-center">
                <div>
                    <Link to="/"><h2 className={`${pathname == '/'|| pathname == '/category/All%20Product' || pathname =='/category/Laptops' || pathname == '/category/Phones' || pathname == '/category/Accessories' || pathname == '/category/Watches' || pathname == '/category/MacBook' || pathname == '/category/Iphone'?'text-white text-2xl font-bold':'text-black text-2xl font-bold'}`}>Gadget Heaven</h2></Link>
                </div>
                <div className={`${pathname == '/'|| pathname == '/category/All%20Product' || pathname =='/category/Laptops' || pathname == '/category/Phones' || pathname == '/category/Accessories' || pathname == '/category/Watches' || pathname == '/category/MacBook' || pathname == '/category/Iphone'?'text-white flex lg:gap-10 gap-2':'text-black flex lg:gap-10 gap-2'}`}>
                    <NavLink to="/" className={({isActive}) => `${isActive?'font-semibold underline decoration-white': 'font-semibold' }`}>Home</NavLink>
                    <NavLink to="/statistics" className={({isActive}) => `${isActive?'font-semibold text-primary': 'font-semibold' }`}>Statistics</NavLink>
                    <NavLink to="/dashboard" className={({isActive}) => `${isActive?'font-semibold text-primary': 'font-semibold' }`}>Dashboard</NavLink>
                    <NavLink to="/documents" className={({isActive}) => `${isActive?'font-semibold text-primary': 'font-semibold' }`}>Documents</NavLink>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <Link to="/dashboard" className="relative bg-white rounded-full p-2 border"><i className="fa-solid fa-cart-shopping flex justify-center items-center"><p className={`${pathname == '/'|| pathname == '/category/All%20Product' || pathname =='/category/Laptops' || pathname == '/category/Phones' || pathname == '/category/Accessories' || pathname == '/category/Watches' || pathname == '/category/MacBook' || pathname == '/category/Iphone'?'text-white absolute -top-3 -right-1 text-xs':'text-primary absolute -top-3 -right-1 text-xs'}`}>{carts.length}</p></i></Link>
                    <Link to="/dashboard" className="relative bg-white rounded-full p-2 border"><i className="fa-solid fa-heart flex justify-center items-center"><p className={`${pathname == '/'|| pathname == '/category/All%20Product' || pathname =='/category/Laptops' || pathname == '/category/Phones' || pathname == '/category/Accessories' || pathname == '/category/Watches' || pathname == '/category/MacBook' || pathname == '/category/Iphone'?'text-white absolute -top-3 -right-1 text-xs':'text-primary absolute -top-3 -right-1 text-xs'}`}>{wishes.length}</p></i></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;