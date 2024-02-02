import React, { useState,useEffect } from 'react';
// import Dropdown, { SearchIcon } from '../components/svgIcons';

const Home = () => {
    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });

    useEffect(()=>{
        setcontactModalStatus({ show: true, data: {} })
    },[]);
    return (
        <div>
            <div className='sm:flex border-black '>
                <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-r-0 border-[1px]'>
                    Buy
                </button>
                <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-r-0 border-[1px]' >
                    Rent
                </button>
                <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-[1px] border-r-0'>
                    Agent Property
                </button>
                {contactModalStatus && <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-[1px]'>
                    New Project
                </button>}
            </div>
            {/* <SearchIcon
                imageClass='w-5 h-5 absolute left-2 top-[1px]  md:top-2'
            /> */}
        </div>
    );
}

export default Home;

