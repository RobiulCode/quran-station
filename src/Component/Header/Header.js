import React,{useState} from 'react';
import logo from './../../images/quran.png';
import {BsSun,BsMoon} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Header = () => {
    const [dark,setDark]= useState(false)
    const addDark=()=>{
        const root = window.document.documentElement;
        root.classList.remove('dark')
        setDark(!dark)
    }
    const removeDark=()=>{
        const root = window.document.documentElement;
        root.classList.add('dark')
        setDark(!dark)
    }

    return (
        <div className="flex items-center justify-between py-2 bg-gray-100 md:w-11/12 md:mx-auto  shadow shadow-gray-400 px-4 dark:bg-gray-700 dark:text-white">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="" className='h-10'/>
                <Link to='/'>
                <span className="text-2xl font-bold">Quran Station</span>
                </Link>
            </div>
            <div className="">
                {
                    dark?<BsSun onClick={addDark}/>:<BsMoon onClick={removeDark}/>
                }
            </div>
        </div>
    );
};

export default Header;