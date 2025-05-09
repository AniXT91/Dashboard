import { Card } from "@/components/ui/card"

const PaymentMethodCard = ({ type, status, number, lastUsed, holderName }) => {
  return (
    <Card className="bg-[#C0C2C980] rounded-[6px] p-4">
      <div className="space-y-2">
        <div className="font-semibold text-lg text-[#070741] underline">{type}</div>

        <div className="flex text-sm">
          <span className="min-w-[110px] text-[#808080] font-normal">Status:</span>
          <span>{status}</span>
        </div>

        <div className="flex text-sm">
          <span className="min-w-[110px] text-[#808080] font-normal">
            {type === "Card" ? "Card No:" : "Phone No:"}
          </span>
          <span>{number}</span>
        </div>

        <div className="flex text-sm">
          <span className="min-w-[110px] text-[#808080] font-normal">Last Used:</span>
          <span>{lastUsed}</span>
        </div>

        <div className="flex text-sm">
          <span className="min-w-[110px] text-[#808080] font-normal">Holder's Name:</span>
          <span>{holderName}</span>
        </div>
      </div>
    </Card>
  )
}

export default PaymentMethodCard
