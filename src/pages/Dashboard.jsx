
import { useState } from "react"
import { Plus, Search } from "lucide-react"

import StatsCard from "../components/StatsCard"
import PaymentMethodCard from "../components/dashboard/PaymentMethodCard"

import {Button} from  "@/components/ui/button"
import PaymentHistoryTable from "@/components/dashboard/PaymentHistoryTable"
import ProfileCard from "@/components/dashboard/ProfileCard"
import RoommateCard from "@/components/dashboard/RoommateCard"
import LeaseCard from "@/components/dashboard/LeaseCard"
import ServicesList from "@/components/dashboard/ServicesList"

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const paymentHistory = [
    { plan: "Card", reason: "Rent", date: "28 December 2022", amount: "10,000" },
    { plan: "Mobile", reason: "Wifi subscription", date: "28 December 2022", amount: "3,500" },
  ]

  const roommateDetails = {
    name: "Yehudi marthus",
    tel: "07XXXX678",
    email: "marthus@gmail.com",
    university: "Cooperative University",
    moveInDate: "Jan 17 2021",
  }

  const leaseDetails = {
    moveInDate: "Jan 15 2021",
    duration: "24 Months",
    evictionDate: "Jan 30 2022",
    evictionNotice: "2 Weeks",
    hasRoommate: true,
  }

  const services = ["Wifi Subscription", "Water", "Electricity"]

  return (
    <div className="grid grid-rows-[auto_auto_1fr] gap-y-12 min-h-full">
      
      {/* ─────────── Row 1: top bar ─────────── */}
      <header className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <Button variant="outline" className="flex bg-[#C0C2C980] items-center gap-1">
            <Plus size={16} />
            Request Service
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm">Renson Gerald</span>
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="/images/a.jpg?height=32&width=32"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-[600]">DASHBOARD</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0a1172]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      </header>

      {/* ─────────── Row 2: stats cards ─────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatsCard  value="$12,875" label="Total Expenses" className="bg-[#C0C2C980]  text-black" />
        <StatsCard  value="$6,875" label="Monthly Expenses" className="bg-[#C0C2C980]  text-black" />
        <StatsCard
          
          value="7 Pending"
          label="Charges"
          className="bg-[#070741] text-white"
        />
        <StatsCard  value="2 Pending" label="Payments" className="bg-[#C0C2C980]  text-black"/>
        <StatsCard value="2 Active" label="Maintenance" className="bg-[#C0C2C980]  text-black" />
      </section>

      {/* ─────────── Row 3: lower section ─────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-6">
        {/* Left column: payment plan + history */}
        <div className="space-y-6 order-2 lg:order-1">
          {/* Payment Plan */}
          <div>
            <h3 className="font-semibold">Your Payment Plan</h3>
            <p className="text-sm font-normal text-black mt-1 mb-3">
              Please select one during payment
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PaymentMethodCard
                type="Card"
                status="Active"
                number="XXXX-XXXX-XXXX-XXXXX"
                lastUsed="Jan 15 2021"
                holderName="Renson Gerald"
              />
              <PaymentMethodCard
                type="Mobile"
                status="Active"
                number="07XX-XXX-503"
                lastUsed="Feb 15 2021"
                holderName="Renson Gerald"
              />
            </div>
          </div>
          {/* Payment History */}
          <div>
            <h3 className="font-semibold">Your Payments</h3>
            <p className="text-sm font-normal mt-1 text-gray-600 mb-3">
              Payment made in the last 12 months
            </p>
            <div className="mt-2 p-4 w-full h-full flex text-center justify-center">
            <PaymentHistoryTable />
            </div>
          </div>
        </div>

        {/* Right column: profile & details */}
        <div className="space-y-6 order-1 lg:order-2">
          <ProfileCard
            name="Renson Gerald"
            unit="#71-BU"
            requested="Jan 10 2021"
            university="CUEA"
            imageUrl="/images/profile.png"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-8">
            <RoommateCard details={roommateDetails} />
            <LeaseCard details={leaseDetails} />
          </div>
          <div className="relative w-7/10 mt-20">
            <ServicesList services={services} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
