import React, { useState } from 'react';
import BellIcon from './icons/Icon';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SearchField from './common/searchField/SearchField';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Topbar = ({ children }: { children: string }) => {
  const pathName = usePathname();
  const [dropDown, setdropDown] = useState(false)


  return (
    <div className="flex justify-between items-center py-4 ">
      <div className="flex flex-row items-center gap-[6px]"><h3 className='flex items-center gap-2 text-sm font-semibold'>

        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M11.8354 0L10.9637 0.838269L13.6174 3.33485H0.561743V4.50114H13.6174L10.9637 6.99772L11.8354 7.83599L16 3.918L11.8354 0ZM4.16465 8.16401L0 12.082L4.16465 16L5.03632 15.1617L2.38257 12.6651H15.4383V11.4989H2.38257L5.03632 9.00228L4.16465 8.16401Z" fill="currentColor" />
        </svg>

        <span className='text-[10px] lg:text-base'>Dashboard</span>  </h3><span className='mb-[3px]'>{'>'}</span>
        <span className='text-[9px] lg:text-[11px]'>{children}</span>
      </div>
      <div className='flex items-center justify-end gap-1 lg:gap-4'>
        <div>
          {
            pathName === '/transaction' ? <SearchField /> : ''
          }
        </div>
        <div className="">
          <div className='relative'>
            <button
              className='py-1 px-1 lg:px-3 border-2 border-gray-300 flex gap-2 items-center rounded text-[8px] lg:text-sm'
              onClick={() => setdropDown(!dropDown)}>
              English {dropDown ? <ChevronUp className={`h-4 w-4 stroke-first-100`} /> : <ChevronDown className={`h-4 w-4 stroke-first-100`} />}
            </button>
            <div className={`${dropDown ? "absolute bg-white w-full rounded text-[10px] lg:text-base" : "hidden"} `}><button className='py-2 px-3'>English</button><button className='py-2 px-3'>Spanish</button></div>
          </div>
        </div>
        <div className='border-[2px] rounded-[10px] border-gray-300 p-1.5 lg:p-2'>
          <BellIcon />
        </div>
        <Link href={`${'/user-profile'}`}>
          <Image
            src="/user-avater.png"
            alt="Profile"
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-2xl "
            height={100}
            width={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;