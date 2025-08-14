import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
        <Link to='/'>
         <p className='font-bold text-3xl'>iShop</p>
            </Link>
         <p className="mt-2 text-sm">Premium fashion & accessories at unbeatable prices.</p>
<p className="mt-2 text-sm">iShop, 22 MG Road, Sector 18, Noida </p>
<p className="text-sm">Email: support@ishop.in</p>
<p className="text-sm">Phone: +91 98765 XXXX</p>

        </div>

        {/* Customer Service Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-500">Order Tracking</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-200 hover:text-blue-500"><FaFacebook/></a>
            <a href="#" className="text-gray-200 hover:text-blue-500"><FaInstagram/></a>
            <a href="#" className="text-gray-200 hover:text-blue-500"><FaSquareXTwitter/></a>
            <a href="#" className="text-gray-200 hover:text-blue-500"><FaPinterest/></a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold">Get the Latest Updates</h3>
          <p className="mt-2 text-sm">Subscribe to get special offers and more.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} <span className='text-blue-600'>iShop</span>. All rights reserved by mohit</p>
      </div>
    </footer>
  )
}

export default Footer
