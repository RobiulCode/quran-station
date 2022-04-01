import React from 'react';
import {AiFillGithub,AiOutlineInfoCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex items-center justify-center py-2 bg-gray-100 md:w-11/12 md:mx-auto px-4 dark:bg-gray-700 dark:text-white space-x-4'>
            <span>Copyright &copy; 2022</span>
            <span className='flex space-x-2'>
                <AiFillGithub size='20px' />
                <BsFacebook size='20px' color='blue'/>
                <Link to='/about'><AiOutlineInfoCircle size='20px'color='red'/></Link>
            </span>
        </div>
    );
};

export default Footer;