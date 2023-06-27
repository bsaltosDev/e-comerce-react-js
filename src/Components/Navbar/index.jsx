import { NavLink } from "react-router-dom"
import { ShoppingCarContext } from "../../Context";
import { useContext } from "react";
import NavItem from "../NavbarItem";

const Navbar = () => {
    const context = useContext(ShoppingCarContext);
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavItem  to='/' activeStyle={activeStyle}>
                        All
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/clothes' activeStyle={activeStyle}>
                        Clothes
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/electronics' activeStyle={activeStyle}>
                        Electronics
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/furnitures' activeStyle={activeStyle}>
                        Furnitures
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/toys' activeStyle={activeStyle}>
                        Toys
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/others' activeStyle={activeStyle}>
                        Others
                    </NavItem>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    bsaltos.dev@gmail.com
                </li>
                <li>
                    <NavItem to='/my-orders' activeStyle={activeStyle}>
                        My Orders
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/my-account' activeStyle={activeStyle}>
                        My Account
                    </NavItem>
                </li>
                <li>
                    <NavItem to='/sign-in' activeStyle={activeStyle}>
                        Sign In
                    </NavItem>
                </li>
                <li>
                    🛒 {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar