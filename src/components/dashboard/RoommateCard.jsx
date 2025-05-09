import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const RoommateCard = ({ details }) => {
  const { name, tel, email, university, moveInDate } = details

  return (
    <div className="h-full">
      <Card className="bg-[#C0C2C980] h-full p-6">
        <div className="space-y-4">
          <h3 className="font-normal text-lg">Roommate Details:</h3>

          <div className="flex text-sm">
            <span className="min-w-[110px] text-gray-600 font-normal">Name:</span>
            <span className="text-gray-800">{name}</span>
          </div>
          <div className="flex text-sm">
            <span className="min-w-[110px] text-gray-600 font-normal">Tel:</span>
            <span className="text-gray-800">{tel}</span>
          </div>
          <div className="flex text-sm">
            <span className="min-w-[110px] text-gray-600 font-normal">Email:</span>
            <span className="text-gray-800">{email}</span>
          </div>
          <div className="flex text-sm">
            <span className="min-w-[110px] text-gray-600 font-normal">University:</span>
            <span className="text-gray-800">{university}</span>
          </div>
          <div className="flex text-sm">
            <span className="min-w-[110px] text-gray-600 font-normal">Move in date:</span>
            <span className="text-gray-800">{moveInDate}</span>
          </div>
        </div>
      </Card>

      <div className="pt-4">
        <Button className="bg-[#070741] font-normal hover:bg-[#05052a]">
          Change Roommate
        </Button>
      </div>
    </div>
  )
}

export default RoommateCard
