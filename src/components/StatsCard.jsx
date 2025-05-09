import { Card } from "@/components/ui/card"

const icon1=(
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.42105 19.8947L0 24.2274V11.7895H4.42105M11.7895 17.1832L9.47579 15.2084L7.36842 17.1537V5.89474H11.7895M19.1579 14.7368L14.7368 19.1579V0H19.1579M23.2989 14.4568L20.6316 11.7895H28V19.1579L25.3621 16.52L14.7368 27.0568L9.62316 22.6063L4.05263 28H0L9.53474 18.6568L14.7368 23.0484"
      fill="black"
      fillOpacity="0.5"
    />
  </svg>
)

const icon2=(
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 25.9996H28V27.9996H0V25.9996ZM25 8.99957C25.2652 8.99957 25.5196 8.89422 25.7071 8.70668C25.8946 8.51915 26 8.26479 26 7.99957V4.99957C25.9999 4.79406 25.9365 4.59356 25.8184 4.42537C25.7003 4.25717 25.5333 4.12945 25.34 4.05957L14.34 0.0595746C14.1203 -0.0198582 13.8797 -0.0198582 13.66 0.0595746L2.66 4.05957C2.46673 4.12945 2.29968 4.25717 2.18159 4.42537C2.06349 4.59356 2.00009 4.79406 2 4.99957V7.99957C2 8.26479 2.10536 8.51915 2.29289 8.70668C2.48043 8.89422 2.73478 8.99957 3 8.99957H4V21.9996H2V23.9996H26V21.9996H24V8.99957H25ZM4 5.69957L14 2.05957L24 5.69957V6.99957H4V5.69957ZM16 21.9996H12V8.99957H16V21.9996ZM6 8.99957H10V21.9996H6V8.99957ZM22 21.9996H18V8.99957H22V21.9996Z" fill="white"/>
  </svg>
)

const StatsCard = ({  value, label, className = "" }) => {
  

  return (
    <Card className={`h-full rounded-xs flex flex-col justify-between p-4 ${className}`}>
      <div className="mb-2">{label=="Charges"?icon2:icon1}</div>
      <div className="text-xl font-[500]">{value}</div>
      <div className="text-sm font-[500]">{label}</div>
    </Card>
  )
}

export default StatsCard
