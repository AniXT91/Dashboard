import { Card } from "@/components/ui/card"

const ServicesList = ({ services }) => {
  return (
    <Card className="p-4 w-auto rounded-[4px] bg-[#070741] text-white h-full">
      <div className="space-y-3">
        <h3 className="font-normal">Services in use:</h3>
        <ol className="list-decimal pl-5 space-y-1">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ol>
      </div>
    </Card>
  )
}

export default ServicesList
