'use client'
import CardSubTitle from '@/components/common/cardSubTitle/CardSubTitle';
import ForgetPINModal from '@/components/common/ForgetPINModal/ForgetPINModal';
import Modal from '@/components/common/Modal/Modal';
import Topbar from '@/components/Topbar';
import ChangePINForm from '@/components/wallet/ChangePINForm';
import CreateNewWalletForm from '@/components/wallet/CreateNewWalletForm';
import DepositModal from '@/components/wallet/DepositModal';
import SubWalletTable from '@/components/wallet/SubWalletTable';
import WithdrawModal from '@/components/wallet/WithdrawModal';
import { WalletTableData } from '@/utils/data/walletTableData';
import Link from 'next/link';
import React, { useState } from 'react';

const WalletPage = () => {
    const [isChangePINModalOpen, setChangePINModalOpen] = useState(false);
    const [isForgetPINModalOpen, setForgetPINModalOpen] = useState(false);

    const handleChangePIN = () => {
        setChangePINModalOpen(true);
    };

    const handleForgetPIN = () => {
        setForgetPINModalOpen(true);
        setChangePINModalOpen(false);
    };

    const handleCloseModal = () => {
        setChangePINModalOpen(false);
        setForgetPINModalOpen(false);
    }


    return (
        <div className=''>
            <Modal
                isOpen={isChangePINModalOpen}
                onClose={handleCloseModal}
                title="Change PIN"
            >
                <ChangePINForm
                    handleForgetPIN={handleForgetPIN}
                />
            </Modal>

            <Topbar>Wallet Balance</Topbar>
            <CardSubTitle title='Wallet Balance' />
            <div className='w-full my-5 flex flex-col lg:flex-row gap-5'>
                <div className='bg-white rounded-xl w-full lg:w-3/5'>
                    <div>
                        {/* id section */}
                        <div className='flex flex-row justify-between items-center px-2 lg:px-5 pt-5'>
                            <div className="font-bold flex flex-row items-center text-xs lg:text-base">Wallet ID :
                                <span className='border border-gray-400 px-[3px]'>123456793438</span>
                                <div className='border border-gray-300 p-[3px] lg:p-[7px]'>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0V8.33333H2.91667V7.5H0.833333V0.833333H5.83333V1.25H6.66667V0H0ZM3.33333 1.66667V10H10V1.66667H3.33333ZM4.16667 2.5H9.16667V9.16667H4.16667V2.5Z" fill="#723EEB" />
                                    </svg>
                                </div>
                                <div className='border border-gray-300 p-[3px] lg:p-[7px]'>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.36562 0.487305L6.8 1.05293L8.46719 2.7123H4.6C3.3872 2.7123 2.4 3.6991 2.4 4.9123C2.4 6.1255 3.3872 7.1123 4.6 7.1123H4.8V6.3123H4.6C3.828 6.3123 3.2 5.6843 3.2 4.9123C3.2 4.1403 3.828 3.5123 4.6 3.5123H8.46875L6.80312 5.17793L7.36875 5.74355L10 3.1123L7.36562 0.487305ZM0 0.712305V9.5123H8.8V5.5123L8 6.3123V8.7123H0.8V1.5123H5.14141L5.94141 0.712305H0Z" fill="#723EEB" />
                                    </svg>
                                </div>
                            </div>
                            <button
                                onClick={() => handleChangePIN()}
                                className='border-[1.5px] font-semibold text-[#723EEB] text-[10px] lg:text-xs p-[2px] lg:p-1 border-[#723EEB]'>Change PIN</button>
                        </div>
                        {/* balance */}
                        <div className='my-1 px-2 lg:px-5'>
                            <h3 className="font-bold">Balance</h3>
                            <p className="text-xs text-gray-500">Today,25 APR 2024</p>
                        </div>
                        <div className='my-7 px-2 lg:px-5'>
                            <h2 className="font-semibold">$ <span className='text-5xl'>00.0</span>USD</h2>
                        </div>
                        {/* button */}
                        <div className='flex flex-row gap-7 justify-center items-center w-3/4 mx-auto my-7'>

                            <WithdrawModal />

                            <DepositModal />

                        </div>
                    </div>
                    <div className="divider divider-neutral"></div>
                    {/* sub wallet table */}
                    <div>
                        <h3 className="font-semibold px-4">Your Sub Wallet</h3>
                        <SubWalletTable />
                    </div>
                </div>
                {/* new wallet form */}
                <div className='bg-white p-4 rounded-xl lg:w-2/5 w-full h-full'>
                    <CreateNewWalletForm />
                </div>
            </div>
            <div className='flex flex-row justify-between items-center my-10'>
                <h1 className='font-bold text-xs'>Wallet Log</h1>
                <Link href={`/wallet/walletLog`}>
                    <button className=" bg-[#723EEB] text-white w-20 lg:w-28 p-2 rounded-full text-xs lg:text-base font-semibold">View More</button>
                </Link>
            </div>


            {/* forget pin modal */}
            <ForgetPINModal
                setForgetPINModalOpen={setForgetPINModalOpen}
                isForgetPINModalOpen={isForgetPINModalOpen}
            />
        </div>
    );
};

export default WalletPage;