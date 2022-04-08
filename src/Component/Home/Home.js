import React from 'react';
import HomeData from './HomeData/HomeData'
import HomeItem from './HomeItem/HomeItem';



const Home = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2 md:w-11/12 md:mx-auto border'>
            {
                HomeData.map((item)=><HomeItem key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Home;