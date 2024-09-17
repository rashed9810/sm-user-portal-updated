import { WalletTableData } from '@/utils/data/walletTableData';
import React, { useState } from 'react';
import Modal from '../common/Modal/Modal';
import SubWalletModalForm from './SubWalletModalForm';
import Link from 'next/link';
import WithdrawIntoWalletModal from './WithdrawIntoWalletModal';
import ChangePINForm from './ChangePINForm';
import ForgetPINModal from '../common/ForgetPINModal/ForgetPINModal';
import EditWalletModal from './EditWalletModal';

const SubWalletTable = () => {
    const [isSubWalletModalOpen, setSubWalletModalOpen] = useState(false);
    const [isWithdrawIntoWalletModalOpen, setWithdrawIntoWalletModalOpen] = useState(false);
    const [isChangePINModalOpen, setChangePINModalOpen] = useState(false);
    const [isForgetPINModalOpen, setForgetPINModalOpen] = useState(false);
    const [isEditWalletModalOpen, setEditWalletModalOpen] = useState(false);

    const handleSubWallet = () => {
        setSubWalletModalOpen(true);
    };

    const handleWithdrawIntoWallet = () => {
        setWithdrawIntoWalletModalOpen(true);
        setSubWalletModalOpen(false);
    };

    const handleChangePIN = () => {
        setSubWalletModalOpen(false);
        setChangePINModalOpen(true);
    };

    const handleEditWallet = () => {
        setEditWalletModalOpen(true);
        setSubWalletModalOpen(false);
    };

    const handleForgetPIN = () => {
        setForgetPINModalOpen(true);
        setSubWalletModalOpen(false);
        setChangePINModalOpen(false);
    };

    const handleCloseModal = () => {
        setSubWalletModalOpen(false);
        setChangePINModalOpen(false);
    }

    return (
        <div className="overflow-x-auto">
            <div>
                <Modal
                    isOpen={isSubWalletModalOpen}
                    onClose={handleCloseModal}
                    title="Wallet Name : Indian"
                >
                    <SubWalletModalForm
                        handleWithdrawIntoWallet={handleWithdrawIntoWallet}
                        handleChangePIN={handleChangePIN}
                        handleForgetPIN={handleForgetPIN}
                        handleEditWallet={handleEditWallet}
                    />
                </Modal>

                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <td>Wallet Name</td>
                            <td>Currency</td>
                            <td>Balance</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            WalletTableData.map((data) => (
                                <tr
                                    onClick={() => handleSubWallet()}
                                    className='bg-gray-100 border-b border-black font-semibold cursor-pointer'
                                    key={data.id}>
                                    <td>{data.wallet}</td>
                                    <td>{data.currency}</td>
                                    <td>{data.balance}</td>
                                    <td>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0V22H22V0H0ZM2 2H20V20H2V2ZM16.2812 6.28125L9 13.5625L5.71875 10.2812L4.28125 11.7188L8.28125 15.7188L9 16.4062L9.71875 15.7188L17.7188 7.71875L16.2812 6.28125Z" fill="#723EEB" />
                                        </svg>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <Link href={'/send-money'} className=''>
                    <div className='w-[95%] mx-auto text-xs text-white p-1.5 bg-[#723EEB] text-center my-5 rounded'>
                        Send Now
                    </div>
                </Link>
            </div>


            {/* withdrawintowallet modal */}
            <WithdrawIntoWalletModal
                isWithdrawIntoWalletModalOpen={isWithdrawIntoWalletModalOpen}
                setWithdrawIntoWalletModalOpen={setWithdrawIntoWalletModalOpen}
            />

            {/* edit wallet modal */}
            <EditWalletModal 
            isEditWalletModalOpen={isEditWalletModalOpen}
            setEditWalletModalOpen={setEditWalletModalOpen}
            />

            {/* change pin modal */}
            <Modal
                isOpen={isChangePINModalOpen}
                onClose={handleCloseModal}
                title="Change PIN"
            >
                <ChangePINForm handleForgetPIN={handleForgetPIN} />
            </Modal>


            {/* forget pin modal */}
            <ForgetPINModal
                setForgetPINModalOpen={setForgetPINModalOpen}
                isForgetPINModalOpen={isForgetPINModalOpen}
            />
        </div>
    );
};

export default SubWalletTable;