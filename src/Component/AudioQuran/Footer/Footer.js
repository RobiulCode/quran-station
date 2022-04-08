import React from 'react';
import {AiFillGithub,AiOutlineInfoCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex items-center justify-center py-2 bg-gray-100 md:w-11/12 md:mx-auto px-4 dark:bg-gray-700 dark:text-white space-x-4'>
            <span>Copyright &copy; 2022</span>
            <span className='flex space-x-2'>
                <a href="https://github.com/RobiulCode/quran-station" target='_blank' rel="noreferrer">
                    <AiFillGithub size='20px' />
                </a>
                <a href="https://facebook.com/robiulawal68" target='_blank' rel="noreferrer">
                <BsFacebook size='20px' color='blue'/>
                </a>
                
                <Link to='/about'><AiOutlineInfoCircle size='20px'color='red'/></Link>
            </span>
        </div>
    );
};

export default Footer;