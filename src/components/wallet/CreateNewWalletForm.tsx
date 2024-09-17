import React from 'react';

const CreateNewWalletForm = () => {
    return (
        <form className='space-y-5'>
            <h3 className="font-semibold">Ceate New Wallet</h3>
            <div className="flex w-full gap-4">
                <div className="w-full">
                    <label className="block mb-1 text-gray-600 font-bold text-[10px]">Wallet Name</label>
                    <input
                        type="text"
                        name="walletName"
                        className="w-full px-3 py-1 text-[10px] border border-gray-400 rounded-[10px] focus:outline-none"
                        placeholder="Enter Wallet Name....."
                    />
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className="w-full">
                    <label className="block mb-1 text-gray-600 font-bold text-[10px]">Wallet Email</label>
                    <input
                        type="email"
                        name="walletEmail"
                        className="w-full px-3 py-1 text-[10px] border border-gray-400 rounded-[10px] focus:outline-none"
                        placeholder="Enter Wallet Email....."
                    />
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className=" w-full text-[10px]">
                    <label className="block mb-2 text-gray-600 font-bold">Select Currency*</label>
                    <select className="w-full px-3 border border-gray-400 rounded-[10px] focus:outline-none select select-sm text-[10px]">
                        <option disabled>Select Currency</option>
                        <option>United States dollar</option>
                        <option>Nigerian naira</option>
                        <option>South African rand</option>
                    </select>
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className="w-full">
                    <label className="block mb-1 text-gray-600 font-bold text-[10px]">Enter Security Question</label>
                    <input
                        type="text"
                        name="securityQuestion"
                        className="w-full px-3 py-1 text-[10px] border border-gray-400 rounded-[10px] focus:outline-none"
                        placeholder="Enter Security Question....."
                    />
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className="w-full">
                    <label className="block mb-1 text-gray-600 font-bold text-[10px]">Answer</label>
                    <input
                        type="text"
                        name="answer"
                        className="w-full px-3 py-1 text-[10px] border border-gray-400 rounded-[10px] focus:outline-none"
                        placeholder="Enter Answer....."
                    />
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className="w-full">
                    <label className="block mb-1 text-gray-600 font-bold text-[10px]">Create New PIN</label>
                    <input
                        type="password"
                        name="newPin"
                        className="w-full px-3 py-1 text-[10px] border border-gray-400 rounded-[10px] focus:outline-none"
                        placeholder="Enter PIN....."
                    />
                    <span className='absolute right-10 mt-2'>

                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.59674 0L0.847251 0.785877L4.08961 4.16856L9.87373 10.2335L10.8676 11.2927L14.4033 15L15.1528 14.2141L11.9104 10.8144C14.1181 9.66757 15.5988 7.96555 15.6904 7.85877L16 7.5L15.6904 7.14123C15.5499 6.97679 12.2159 3.12642 8 3.12642C6.97963 3.12642 6.01629 3.36133 5.13238 3.70729L1.59674 0ZM8 4.21982C9.1222 4.21982 10.1833 4.55083 11.1283 5.00569C11.4644 5.5951 11.6497 6.26139 11.6497 6.9533C11.6497 7.94633 11.2831 8.85393 10.6884 9.53303L9.2057 7.97836C9.42363 7.6986 9.56416 7.34411 9.56416 6.9533C9.56416 6.04784 8.86354 5.31321 8 5.31321C7.62729 5.31321 7.28921 5.46056 7.0224 5.68907L5.96334 4.57859C6.611 4.36931 7.28921 4.21982 8 4.21982ZM3.1446 4.71526C1.47251 5.79371 0.386966 7.0494 0.309572 7.14123L0 7.5L0.309572 7.85877C0.443992 8.0168 3.53157 11.5597 7.5112 11.8394C7.6721 11.8565 7.83503 11.8736 8 11.8736C8.16497 11.8736 8.3279 11.8565 8.4888 11.8394C8.91853 11.8095 9.33809 11.7497 9.74338 11.6515L8.81466 10.6777C8.5499 10.7417 8.28106 10.7802 8 10.7802C5.98778 10.7802 4.35031 9.06321 4.35031 6.9533C4.35031 6.66287 4.38697 6.37884 4.44807 6.09909L3.1446 4.71526ZM3.43788 5.82574C3.35438 6.19519 3.30754 6.57104 3.30754 6.9533C3.30754 7.90362 3.56212 8.77919 4.00815 9.53303C2.81466 8.81549 1.90224 7.97409 1.43381 7.5C1.82281 7.10493 2.52342 6.44932 3.43788 5.82574ZM12.5621 5.82574C13.4766 6.44932 14.1752 7.10493 14.5662 7.5C14.0978 7.97409 13.1711 8.83257 11.9756 9.55011C12.4236 8.79627 12.6925 7.90362 12.6925 6.9533C12.6925 6.57104 12.6456 6.19305 12.5621 5.82574Z" fill="#4B4B4B" />
                        </svg>

                    </span>
                </div>
            </div>
            <div className='w-full mx-auto mt-3'>
                <input className='w-full bg-[#723EEB] text-white p-1 rounded text-[10px]' type="submit" value="Create Now" />
            </div>
        </form>
    );
};

export default CreateNewWalletForm;