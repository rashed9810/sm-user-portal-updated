import { sendMoneyPendingTableData } from '@/utils/data/sendMoneyPendingTableData';
import React from 'react';

const SendMoneyPendingTable = () => {
    return (
        <div>
            {
                sendMoneyPendingTableData?.map((data) => (
                    <div key={data.id} className='bg-gray-100 rounded-2xl p-4 mt-10'>
                        <div className=''>
                            {/* 1st row */}
                            <p className='border-b border-black flex flex-row justify-between items-center text-xs pb-2 '>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600  rounded-full flex justify-center items-center w-5 h-5 '>
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.03846 0.341309V3.274H0.5V8.65862H10.5V3.274H8.96154V0.341309L7.80769 0.918232L7.03846 0.533616L6.26923 0.918232L5.5 0.533616L4.73077 0.918232L3.96154 0.533616L3.19231 0.918232L2.03846 0.341309ZM3.96154 1.399L4.73077 1.78362L5.5 1.399L6.26923 1.78362L7.03846 1.399L7.80769 1.78362L8.19231 1.59131V4.81246H2.80769V1.59131L3.19231 1.78362L3.96154 1.399ZM1.26923 4.04323H2.03846V5.58169H8.96154V4.04323H9.73077V7.88939H1.26923V4.04323ZM2.80769 6.35092V7.12015H3.57692V6.35092H2.80769ZM4.34615 6.35092V7.12015H5.11538V6.35092H4.34615ZM5.88462 6.35092V7.12015H6.65385V6.35092H5.88462ZM7.42308 6.35092V7.12015H8.19231V6.35092H7.42308Z" fill="#723EEB" />
                                        </svg>
                                    </div>
                                    <p>MTCN Number</p>
                                </div>
                                <p >{data.mtcnNumber}</p>
                            </p>
                            {/* 2nd row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600  rounded-full flex justify-center items-center w-5 h-5 '>
                                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.03846 0.341309V3.274H0.5V8.65862H10.5V3.274H8.96154V0.341309L7.80769 0.918232L7.03846 0.533616L6.26923 0.918232L5.5 0.533616L4.73077 0.918232L3.96154 0.533616L3.19231 0.918232L2.03846 0.341309ZM3.96154 1.399L4.73077 1.78362L5.5 1.399L6.26923 1.78362L7.03846 1.399L7.80769 1.78362L8.19231 1.59131V4.81246H2.80769V1.59131L3.19231 1.78362L3.96154 1.399ZM1.26923 4.04323H2.03846V5.58169H8.96154V4.04323H9.73077V7.88939H1.26923V4.04323ZM2.80769 6.35092V7.12015H3.57692V6.35092H2.80769ZM4.34615 6.35092V7.12015H5.11538V6.35092H4.34615ZM5.88462 6.35092V7.12015H6.65385V6.35092H5.88462ZM7.42308 6.35092V7.12015H8.19231V6.35092H7.42308Z" fill="#723EEB" />
                                        </svg>
                                    </div>
                                    <p>Transaction Type</p>
                                </div>
                                <p >{data.transfer}</p>
                            </p>
                            {/* 3rd row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600 p-1 rounded-full'>
                                        <svg width="11" height="11" viewBox="00 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 0.682251L5.31771 0.773397L1.15104 2.81767L0.916667 2.93486V3.651H10.0833V2.93486L9.84896 2.81767L5.68229 0.773397L5.5 0.682251ZM5.5 1.61975L7.94792 2.81767H3.05208L5.5 1.61975ZM1.75 4.06767V8.23433H1.33333V9.06767H9.66667V8.23433H9.25V4.06767H8.41667V8.23433H7.58333V4.06767H6.75V8.23433H5.91667V4.06767H5.08333V8.23433H4.25V4.06767H3.41667V8.23433H2.58333V4.06767H1.75ZM0.5 9.48433V10.3177H10.5V9.48433H0.5Z" fill="#723EEB" />
                                        </svg>
                                    </div>
                                    <p>Method Name</p>
                                </div>
                                <p >{data.method} </p>
                            </p>
                            {/* 4th row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600 p-1 rounded-full'>
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 0C3.57227 0 2 1.57227 2 3.5C2 4.70508 2.61523 5.77539 3.54688 6.40625C1.76367 7.17188 0.5 8.94141 0.5 11H1.5C1.5 8.78516 3.28516 7 5.5 7C7.71484 7 9.5 8.78516 9.5 11H10.5C10.5 8.94141 9.23633 7.17188 7.45312 6.40625C8.38477 5.77539 9 4.70508 9 3.5C9 1.57227 7.42773 0 5.5 0ZM5.5 1C6.88672 1 8 2.11328 8 3.5C8 4.88672 6.88672 6 5.5 6C4.11328 6 3 4.88672 3 3.5C3 2.11328 4.11328 1 5.5 1Z" fill="#723EEB" />
                                        </svg>
                                    </div>
                                    <p>Account Number</p>
                                </div>
                                <p >{data.accountNumber}</p>
                            </p>
                            {/* 5th row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600 p-1 rounded-full'>

                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.58333 0.5C6.83626 0.5 6.15918 0.639974 5.63021 0.903646C5.10124 1.16732 4.66667 1.59701 4.66667 2.16667V3.83333C4.66667 3.88704 4.68457 3.93913 4.69271 3.98958C4.30534 3.88867 3.87565 3.83333 3.41667 3.83333C2.6696 3.83333 1.99251 3.97331 1.46354 4.23698C0.93457 4.50065 0.5 4.93034 0.5 5.5V8.83333C0.5 9.403 0.93457 9.83268 1.46354 10.0964C1.99251 10.36 2.6696 10.5 3.41667 10.5C4.16374 10.5 4.84082 10.36 5.36979 10.0964C5.89876 9.83268 6.33333 9.403 6.33333 8.83333V8.66406C6.71582 8.76497 7.13411 8.83333 7.58333 8.83333C8.3304 8.83333 9.00749 8.69336 9.53646 8.42969C10.0654 8.16602 10.5 7.73633 10.5 7.16667V2.16667C10.5 1.59701 10.0654 1.16732 9.53646 0.903646C9.00749 0.639974 8.3304 0.5 7.58333 0.5ZM7.58333 1.33333C8.2181 1.33333 8.78288 1.47005 9.15885 1.65885C9.53483 1.84766 9.66667 2.04622 9.66667 2.16667C9.66667 2.28711 9.53483 2.48568 9.15885 2.67448C8.78288 2.86328 8.2181 3 7.58333 3C6.94857 3 6.38379 2.86328 6.00781 2.67448C5.63184 2.48568 5.5 2.28711 5.5 2.16667C5.5 2.04622 5.63184 1.84766 6.00781 1.65885C6.38379 1.47005 6.94857 1.33333 7.58333 1.33333ZM5.5 3.35156C5.54395 3.37598 5.58464 3.4069 5.63021 3.42969C6.15918 3.69336 6.83626 3.83333 7.58333 3.83333C8.3304 3.83333 9.00749 3.69336 9.53646 3.42969C9.58203 3.4069 9.62272 3.37598 9.66667 3.35156V3.83333C9.66667 3.95378 9.53483 4.15234 9.15885 4.34115C8.78288 4.52995 8.2181 4.66667 7.58333 4.66667C6.94857 4.66667 6.38379 4.52995 6.00781 4.34115C5.63184 4.15234 5.5 3.95378 5.5 3.83333V3.35156ZM3.41667 4.66667C4.05143 4.66667 4.61621 4.80339 4.99219 4.99219C5.36816 5.18099 5.5 5.37956 5.5 5.5C5.5 5.62044 5.36816 5.81901 4.99219 6.00781C4.61621 6.19661 4.05143 6.33333 3.41667 6.33333C2.7819 6.33333 2.21712 6.19661 1.84115 6.00781C1.46517 5.81901 1.33333 5.62044 1.33333 5.5C1.33333 5.37956 1.46517 5.18099 1.84115 4.99219C2.21712 4.80339 2.7819 4.66667 3.41667 4.66667ZM9.66667 5.01823V5.5C9.66667 5.62044 9.53483 5.81901 9.15885 6.00781C8.78288 6.19661 8.2181 6.33333 7.58333 6.33333C7.1097 6.33333 6.68164 6.25521 6.33333 6.13802V5.5C6.33333 5.44629 6.31543 5.39421 6.30729 5.34375C6.69466 5.44466 7.12435 5.5 7.58333 5.5C8.3304 5.5 9.00749 5.36003 9.53646 5.09635C9.58203 5.07357 9.62272 5.04264 9.66667 5.01823ZM1.33333 6.6849C1.37728 6.70931 1.41797 6.74023 1.46354 6.76302C1.99251 7.02669 2.6696 7.16667 3.41667 7.16667C4.16374 7.16667 4.84082 7.02669 5.36979 6.76302C5.41536 6.74023 5.45605 6.70931 5.5 6.6849V7.16667C5.5 7.28711 5.36816 7.48568 4.99219 7.67448C4.61621 7.86328 4.05143 8 3.41667 8C2.7819 8 2.21712 7.86328 1.84115 7.67448C1.46517 7.48568 1.33333 7.28711 1.33333 7.16667V6.6849ZM9.66667 6.6849V7.16667C9.66667 7.28711 9.53483 7.48568 9.15885 7.67448C8.78288 7.86328 8.2181 8 7.58333 8C7.1097 8 6.68164 7.93327 6.33333 7.81771V7.01042C6.71582 7.11133 7.13249 7.16667 7.58333 7.16667C8.3304 7.16667 9.00749 7.02669 9.53646 6.76302C9.58203 6.74023 9.62272 6.70931 9.66667 6.6849ZM1.33333 8.35156C1.37728 8.37598 1.41797 8.4069 1.46354 8.42969C1.99251 8.69336 2.6696 8.83333 3.41667 8.83333C4.16374 8.83333 4.84082 8.69336 5.36979 8.42969C5.41536 8.4069 5.45605 8.37598 5.5 8.35156V8.83333C5.5 8.95378 5.36816 9.15234 4.99219 9.34115C4.61621 9.52995 4.05143 9.66667 3.41667 9.66667C2.7819 9.66667 2.21712 9.52995 1.84115 9.34115C1.46517 9.15234 1.33333 8.95378 1.33333 8.83333V8.35156Z" fill="#723EEB" />
                                        </svg>

                                    </div>
                                    <p>Sender Amount</p>
                                </div>
                                <p >{data.senderAmount} </p>
                            </p>
                            {/* 6th row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600 flex justify-center items-center w-5 h-5 rounded-full'>

                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.89709 0.185181L7.3523 0.742081L9.0109 2.40068H0.85109V3.1755H9.0109L7.3523 4.83409L7.89709 5.39099L10.5 2.78809L7.89709 0.185181ZM3.10291 5.60891L0.5 8.21181L3.10291 10.8147L3.6477 10.2578L1.9891 8.59922H10.1489V7.82441H1.9891L3.6477 6.16581L3.10291 5.60891Z" fill="#723EEB" />
                                        </svg>

                                    </div>
                                    <p>Exchange Rate</p>
                                </div>
                                <p >{data.exchangeRate} $</p>
                            </p>
                            {/* 7th row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600 flex justify-center items-center w-5 h-5 rounded-full'>

                                        <svg width="11" height="11" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.5 0.423096V6.57694H9.73077V4.65386H10.5V2.34617H9.73077V0.423096H0.5ZM1.26923 1.19233H8.96154V5.80771H1.26923V1.19233ZM2.03846 1.96156V5.03848H5.11538V1.96156H2.03846Z" fill="#723EEB" />
                                        </svg>

                                    </div>
                                    <p>Fees & Charges</p>
                                </div>
                                <p >{data.fees_changes}</p>
                            </p>
                            {/* 7th row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600 flex justify-center items-center w-5 h-5 rounded-full'>

                                        <svg width="11" height="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.80769 0.0769043V1.32089L1.46755 0.516357L1.07091 1.17591L1.80334 1.61537H0.5V8.92306H2.80769V8.15383H1.26923V2.3846H4.35667C4.67706 2.14614 5.07077 1.99998 5.5 1.99998C5.63538 1.99998 5.76231 2.01597 5.88462 2.03904V1.61537H4.58128L5.3137 1.17591L4.91707 0.516357L3.57692 1.32089V0.0769043H2.80769ZM5.5 2.76921C4.86731 2.76921 4.34615 3.29037 4.34615 3.92306C4.34615 4.05844 4.37481 4.18614 4.41827 4.30767H3.57692V5.0769V8.92306H10.5V5.0769V4.30767H9.65865C9.7025 4.18614 9.73077 4.05844 9.73077 3.92306C9.73077 3.29037 9.20962 2.76921 8.57692 2.76921C7.90385 2.76921 7.44702 3.27979 7.14663 3.70671C7.10625 3.76364 7.07423 3.81996 7.03846 3.87573C7.00231 3.81996 6.97067 3.76402 6.93029 3.70671C6.62952 3.27979 6.17308 2.76921 5.5 2.76921ZM5.5 3.53844C5.74038 3.53844 6.05288 3.79671 6.29327 4.1394C6.35173 4.22364 6.34288 4.22843 6.38942 4.30842H5.5C5.28231 4.30842 5.11538 4.1415 5.11538 3.92381C5.11538 3.70612 5.28231 3.53844 5.5 3.53844ZM8.57692 3.53844C8.79462 3.53844 8.96154 3.70537 8.96154 3.92306C8.96154 4.14075 8.79462 4.30767 8.57692 4.30767H7.6875C7.73442 4.22806 7.72519 4.22325 7.78365 4.1394C8.02404 3.79671 8.33654 3.53844 8.57692 3.53844ZM4.34615 5.0769H6.65385V8.15383H4.34615V5.0769ZM7.42308 5.0769H9.73077V8.15383H7.42308V5.0769Z" fill="#723EEB" />
                                        </svg>

                                    </div>
                                    <p>Sending Purpose</p>
                                </div>
                                <p >{data.sendingPurpose}</p>
                            </p>
                            {/* 7th row */}
                            <p className='border-b border-black flex flex-row justify-between items-center py-3 text-xs'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='border border-indigo-600 flex justify-center items-center w-5 h-5 rounded-full'>

                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 0.5C2.74284 0.5 0.5 2.74284 0.5 5.5C0.5 8.25716 2.74284 10.5 5.5 10.5C8.25716 10.5 10.5 8.25716 10.5 5.5C10.5 2.74284 8.25716 0.5 5.5 0.5ZM5.5 1.33333C7.80631 1.33333 9.66667 3.19369 9.66667 5.5C9.66667 7.80631 7.80631 9.66667 5.5 9.66667C3.19369 9.66667 1.33333 7.80631 1.33333 5.5C1.33333 3.19369 3.19369 1.33333 5.5 1.33333ZM5.5 2.16667C5.03939 2.16667 4.66667 2.53939 4.66667 3C4.66667 3.46061 5.03939 3.83333 5.5 3.83333C5.96061 3.83333 6.33333 3.46061 6.33333 3C6.33333 2.53939 5.96061 2.16667 5.5 2.16667ZM3.09115 3.84635L2.90885 4.65365L4.66667 5.04427V6.75L4.26302 8.75521L5.07031 8.91146L5.48698 6.82812L5.5 6.78906L5.51302 6.82812L5.92969 8.91146L6.73698 8.75521L6.33333 6.75V5.04427L8.09115 4.65365L7.90885 3.84635L6.125 4.25H4.875L3.09115 3.84635Z" fill="#723EEB" />
                                        </svg>

                                    </div>
                                    <p>Source of Fund</p>
                                </div>
                                <p >{data.sourceOfFund}</p>
                            </p>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-5'>
                            <div className="text-[10px] bg-[#723EEB] text-center text-white px-3 py-1 rounded-full mt-5 hover:shadow-lg shadow-black">
                                Download Receipt
                            </div>
                            <div className="text-[10px] bg-[#723EEB] text-center text-white px-3 py-1 rounded-full mt-5 hover:shadow-lg shadow-black">
                                Copy Link
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default SendMoneyPendingTable;