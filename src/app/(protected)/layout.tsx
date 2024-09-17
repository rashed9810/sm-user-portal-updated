"use client";

import { ReactNode } from 'react';
// import Sidebar from '../components/Sidebar';
import TheSidebar from '@/components/shared/TheSidebar';
import '../../styles/globals.css';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html data-theme="light">
      <body>
        <div className='flex lg:flex-row w-full'>
          <TheSidebar />
          <div className='w-full bg-gradient-to-tl from-cyan-200 to-pink-200 h-auto'>
            <div className=' py-2 lg:pl-4 pl-2 pr-2'>
              {children}
            </div>
          </div >
        </div>
      </body>
    </html>
  );
};

export default Layout;
