import React from 'react';
import Kalima from './Kalima/Kalima';

import kalimaData from './kalimaData/kalimaData'

const LearnKalima = () => {
    return (
        <div className='border md:w-11/12 md:mx-auto px-2 font-bangla space-y-2 p-3 dark:text-white'>
            <p>
                কালেমা ইসলামের মৌলিক বিশ্বাস সম্বলিত কয়েকটি আরবি পংক্তির নাম। এর মাধ্যমেই ইসলামের প্রথম স্তম্ভ পূর্ণতা পায়। ইসলামে কালমিার গুরুত্ব ও মর্যাদা অনেক । কালিমার মূল অবকাঠামো হচ্ছে বিশ্বাস। রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বলেন : “যে ব্যক্তি এমতাবস্থায় মারা যায় যে সে জানে আল্লাহ ছাড়া কোন সঠিক উপাস্য নেই সে জান্নাতে যাবে।
            </p>
            <div className="space-y-2">
                {
                    kalimaData.map((kalima)=> <Kalima kalima={kalima}></Kalima>)
                }
            </div>
        </div>
    );
};

export default LearnKalima;
