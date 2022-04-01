import React from 'react';

const About = () => {
    return (
        <div className="flex items-center justify-between py-2  md:w-11/12 md:mx-auto   px-4 dark:bg-gray-700 dark:text-white">
            <div className="dark:text-white w-full">
                <p className='bg-blue-400 text-white py-1 px-2'>Audio api Source: mp3quran.net</p>
                <p className='bg-blue-300 text-white py-1 px-2'>Sura list Source: risan</p>
                <p className='bg-blue-200 text-gray-600 py-1 px-2'>Web language: React and Tailwind CSS</p>

            </div>
        </div>
    );
};

export default About;