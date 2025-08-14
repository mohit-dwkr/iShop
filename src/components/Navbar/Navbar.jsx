import React, { useContext, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { ShopContext } from '../../context/ShopContext';



const Navbar = () => {
    const {getTotalCartItem} = useContext(ShopContext)

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400'>

            <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
                <Link to='/'> <p  className='md:w-20 w-24 h-16 font-bold text-3xl flex items-center font ' >iShop</p> </Link>
                <div className='flex items-center gap-5'>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center  text-xl gap-10'>
                            <Link to='/'><li className=' px-1 font-semibold hover:text-white hover:bg-blue-500 rounded-md transition duration-300 '>Home</li></Link>
                            <Link to='/mens'><li className=' px-1 font-semibold hover:text-white hover:bg-blue-500 rounded-md transition duration-300 '>Mens</li></Link>
                            <Link to='/womens'><li className=' px-1 font-semibold hover:text-white hover:bg-blue-500 rounded-md transition duration-300 '>Womens</li></Link>
                            <Link to='/kids'><li className=' px-1 font-semibold hover:text-white hover:bg-blue-500 rounded-md transition duration-300 '>Kids</li></Link>
                            <Link to='/login'> <button className='bg-blue-500 hover:bg-blue-700 font-bold text-white px-4 py-1 rounded-md cursor-pointer transition duration-300'>Login</button></Link>

                        </ul>
                    </nav>
                    <Link to='/cart' className='relative w-10'>
                        <ShoppingCart />
                        <div className='bg-red-500 w-5 absolute  -top-3 left-4 flex items-center justify-center rounded-full text-white
                    '>{getTotalCartItem()}</div>
                    </Link>

                    {showMenu ? (
                        <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden ' size={30} />
                    ) : (
                        <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden ' size={30} />
                    )}
                </div>
            </div>

            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
    )
}

export default Navbar
