'use client'

import { sideMenu } from '@/static';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface StateProps {
    setIsSideMenuOpen: (value: boolean) => void;
    isSideMenuOpen: boolean;
}

const SideMenuList: React.FC<StateProps> = ({ setIsSideMenuOpen, isSideMenuOpen }) => {
    const pathName = usePathname();


    return (
        <>
            <nav>
                <ul>
                    {/* responsive */}
                    {
                        sideMenu.map((item) => (
                            <li
                                key={item?.id}
                                onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                                className={` flex gap-2 items-center w-[192px] h-full py-3 px-2.5 rounded-[10px] mx-2 hover:scale-110 duration-300 lg:hidden ${pathName === `/${item.link}` && 'bg-gray-200'} cursor-pointer`}
                            >
                                <p className={` flex justify-center items-center ${pathName === `/${item.link}` ? 'bg-[#723EEB] w-6 h-6 stroke-white rounded-[30%]' : 'w-6 h-6 bg-[#ebe6fa] rounded-[30%]'}`}>
                                    {item.icon}
                                </p>
                                <Link
                                    href={`/${item?.link}`}
                                    className={`text-sm font-bold capitalize transition-transform transform group-hover:translate-x-[1px] text-second-600 ${pathName === `/${item.link}` && 'font-bold'}`}
                                >
                                    {item?.name}
                                </Link>
                            </li>
                        ))
                    }
                    {/* for desktop */}
                    {
                        sideMenu.map((item) => (
                            <Link href={`/${item?.link}`}
                                key={item?.id}
                                onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                                className={` lg:flex gap-2 items-center w-[192px] h-full py-3 px-2.5 rounded-[10px] mx-2 hidden hover:scale-110 duration-300 ${pathName === `/${item.link}` && 'bg-gray-200'} cursor-pointer`}
                            >
                                <div className={` flex justify-center items-center ${pathName === `/${item.link}` ? 'bg-[#723EEB] w-6 h-6 stroke-white rounded-[30%]' : 'w-6 h-6 bg-[#ebe6fa] rounded-[30%]'}`}>
                                    {item.icon}
                                </div>
                                <div
                                    className={`text-sm font-bold capitalize transition-transform transform group-hover:translate-x-[1px] text-second-600 ${pathName === `/${item.link}` && 'font-bold'}`}
                                >
                                    {item?.name}
                                </div>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};

export default SideMenuList;