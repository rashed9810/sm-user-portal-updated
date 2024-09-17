"use client"
import { Wallet } from 'lucide-react'
import SendMoneyLog from '@/components/dashboard/SendMoneyLog/SendMoneyLog'
import TotalTransactionsChart from '@/components/dashboard/TotalTransactionsChart/TotalTransactionsChart'
import Topbar from '@/components/Topbar'


const page = () => {
    return (
        <div>
            <Topbar>Dashboard</Topbar>
            <Wallet />
            <TotalTransactionsChart />
            <SendMoneyLog />

        </div>
    )
}

export default page
