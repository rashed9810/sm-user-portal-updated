import React, { useState } from 'react';
import SideMenuList from '../sidebar/SideMenuList';
import SideLogo from './SideLogo';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

const TheSidebar = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    return (
        <div>
            <div className='lg:hidden absolute'>
                <button
                    className="p-1 mr-5 mb-4 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                    aria-label="Menu"
                >
                    {isSideMenuOpen ? (
                        ""
                    ) : (
                        <div className='pl-4'><FaBarsStaggered onClick={toggleSideMenu} className="w-3 h-3" /></div>
                    )}
                </button>
            </div>
            <div className={`z-20 fixed duration-300 inset-y-0 ease-in-out overflow-y-auto ${isSideMenuOpen ? "translate-x-0 bg-white" : "-translate-x-full"} lg:hidden`}>
                <div className=''>
                    <div className='p-4 mt-3 flex flex-row justify-center items-center'>
                        <div className='w-52 pl-2 ease-in-out duration-300 absolute top-2'><FaXmark onClick={toggleSideMenu} className="w-6 h-6" /></div>
                        <SideLogo />
                    </div>
                    <div className='my-3'>
                        <SideMenuList isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <div>
                    <div className='p-4 flex flex-row justify-center items-center'>
                        <SideLogo />
                    </div>
                    <div className='mt-2 mb-3'>
                        <SideMenuList isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheSidebar;