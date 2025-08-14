import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-100 px-8 pb-6 pt-16 text-black md:hidden  shadow-md`}>
            <div>
                <div className='flex items-center justify-start gap-3 '>
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello Mohit</h1>
                        <h1 className='text-sm text-slate-500'>User </h1>
                    </div>
                </div>
                <nav className='mt-12'>
                    <ul className='flex flex-col space-y-4 text-xl'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/mens'><li>Mens</li></Link>
                        <Link to='/womens'><li>Womens</li></Link>
                        <Link to='/kids'><li>Kids</li></Link>
                        <Link to='/login'> <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded-md cursor-pointer'>Login</button></Link>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveMenu
