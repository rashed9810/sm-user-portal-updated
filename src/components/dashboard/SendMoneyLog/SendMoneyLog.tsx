'use client'
import { sendMoneyLogData, SendMoneyLogDataType } from "@/utils/data/sendMoneyLogData";
import Link from "next/link";
import { useState } from "react";
import { GoArrowUp, GoDotFill } from "react-icons/go";
import SendMoneyPendingTable from "./SendMoneyPendingTable";
import SendMoneyCompleteTable from "./SendMoneyCompleteTable";

type OpenStateType = {
    [key: number]: boolean;
};


const SendMoneyLog = () => {
    const [open, setOpen] = useState<OpenStateType>({});

    const toggleCard = (id: number) => {
        setOpen((prevState: any) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }
    return (
        <div className='mt-28 lg:mt-20'>
            <div className='flex justify-between'>
                <h2 className='text-sm font-semibold'>Send Money Log</h2>
                <button className='bg-[#723EEB] hover:bg-[#6125ec] duration-500 rounded-3xl lg:text-base font-bold text-white text-xs px-3 lg:px-5 py-2'>
                    <Link href={'/transaction'}>
                        View More
                    </Link>
                </button>
            </div>

            <div className="h-24 overflow-y-scroll scroll-smooth no-scrollbar my-2">
                {
                    sendMoneyLogData.map((data: SendMoneyLogDataType) => (
                        <div key={data.id} className={`bg-white my-2 px-2 py-2 lg:px-6 lg:py-4 mb-5 rounded-2xl cursor-pointer ${open[data.id] ? ' shadow-md shadow-neutral-400' : ''}`}>
                            <div onClick={() => toggleCard(data.id)} className='flex flex-row justify-between items-center'>
                                <div className="flex items-center">
                                    <div className="bg-[#F3F2F2] p-2 rounded-full mr-4">
                                        <GoArrowUp className="text-base sm:text-2xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm sm:text-lg font-semibold">{data.name} </h2>
                                        <h2 className="lg:text-xs text-[10px] flex items-center">
                                            {data.transfer}
                                            <span className="flex items-center ml-2">
                                                {
                                                    data.status === 'Pending' ? <GoDotFill className="text-[#FF9F43]" /> :
                                                        <GoDotFill className="text-[#0AC484]" />
                                                }
                                                <p>{data.status}</p>
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-[#723EEB] text-sm font-semibold '> ID : {data.recipientsId}</h2>
                                </div>
                            </div>
                            {
                                data.status === 'Pending' ? (
                                    <div className={`grid transition-all duration-500 ease-in-out  ${open[data.id] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className='overflow-hidden flex flex-col'>
                                            <SendMoneyPendingTable />
                                        </div>
                                    </div >
                                ) : (
                                    <div className={`grid transition-all duration-500 ease-in-out  ${open[data.id] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className='overflow-hidden flex flex-col'>
                                            <SendMoneyCompleteTable />
                                        </div>
                                    </div >
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default SendMoneyLog


