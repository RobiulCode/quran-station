import React from 'react';
import auther from './../../../images/auther.jpg';

const About = () => {
    return (
        <div className="flex items-center justify-center py-2  md:w-11/12 md:mx-auto   px-4 dark:bg-gray-700 dark:text-white border">
            <div className="dark:text-white border">
                <div className='flex items-center justify-center'>
                    <img src={auther} alt='' className='rounded-full h-40 w-40'/>
                </div>
                <div className="bg-gray-300 dark:bg-gray-600 px-3 py-2 flex flex-col divide-y">
                    <span className="py-2">Robiul Awal</span>
                    <span className="py-2">Full Mern Stack Web Developer</span>
                    <span className="py-2">This site made with React and Tailwind CSS</span>
                </div>
                <div className="bg-blue-500 dark:bg-gray-600 py-1 text-center font-bold">
                    My skils are:
                </div>
                <div className='bg-gray-300 dark:bg-gray-600 px-3 py-2'>
                    <div class="mb-1 text-base font-medium">HTML</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-pink-600 h-2.5 rounded-full" style={{width: '95%'}}></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-blue-700">CSS3</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-red-700">BootStrap CSS</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-red-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-yellow-700">Tailwind CSS</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-yellow-400 h-2.5 rounded-full" style={{width: '90%'}}></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-green-700">Material CSS</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-green-600 h-2.5 rounded-full" style={{width: '60%'}}></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-yellow-700">JavaScript</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-yellow-400 h-2.5 rounded-full" style={{width: '80%'}}></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-indigo-700">React JS</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-indigo-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
                    </div>

                    <div class="mb-1 text-base font-medium text-purple-700">Node Js</div>
                        <div class="w-full bg-white dark:bg-gray-100 rounded-full h-2.5">
                        <div class="bg-purple-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;