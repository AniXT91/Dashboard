import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const LeaseCard = ({ details }) => {
  return (
    <div className="h-full">
    <Card className="bg-[#C0C2C980] h-full p-6">
      <div className="space-y-4">
        <h3 className="font-normal text-lg">Lease Agreement:</h3>
        <div className="grid gap-2">
          <div className="grid grid-cols-[140px_1fr] text-sm">
            <span className="text-gray-600 font-normal">Move in date:</span>
            <span className="text-gray-800">{details.moveInDate}</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] text-sm">
            <span className="text-gray-600 font-normal">Duration:</span>
            <span className="text-gray-800">{details.duration}</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] text-sm">
            <span className="text-gray-600 font-normal">Eviction date:</span>
            <span className="text-gray-800">{details.evictionDate}</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] text-sm">
            <span className="text-gray-600 font-normal">Eviction notice:</span>
            <span className="text-gray-800">{details.evictionNotice}</span>
          </div>
          <div className="grid grid-cols-[140px_1fr] text-sm">
            <span className="text-gray-600 font-normal">Roommate:</span>
            <span className="text-gray-800">
              {details.hasRoommate ? "Yes" : "No"}
            </span>
          </div>
        </div>
        </div>
        </Card>

        <div className="text-end pt-4">
          <Button className=" bg-[#070741] font-normal hover:bg-[#05052a]">
            Renew Agreement
          </Button>
        </div>
      </div>
  )
}

export default LeaseCard
