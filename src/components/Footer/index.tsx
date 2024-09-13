import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-center md:text-left">
                    <p className="text-sm mb-2">© {new Date().getFullYear()} Radar Konoha. All rights reserved.</p>
                    <p className="text-sm">
                        <a href="/about" className="hover:underline">About Us</a> | 
                        <a href="/contact" className="hover:underline"> Contact</a> |
                        <a href="/privacy" className="hover:underline"> Privacy Policy</a>
                    </p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
