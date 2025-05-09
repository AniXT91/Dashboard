const PaymentHistoryTable = () => {
  const thClass = "p-4 text-[#00003EE8] font-medium";
  const tdLabelClass = "p-4 text-[#1D77FF]";
  const tdValueClass = "p-4 font-normal";
  const borderColor = "border-[rgba(128,128,128,0.5)] border-[0.5px]";

  return (
    <div className={`rounded-[8px] overflow-hidden border ${borderColor}`}>
      <table className="w-full">
        <thead className="bg-[rgba(128,128,128,0.2)]">
          <tr>
            <th className={thClass}>Payment Plan</th>
            <th className={thClass}>Reason</th>
            <th className={thClass}>Date</th>
            <th className={thClass}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`border-t ${borderColor} rounded-[4px]`}>
            <td className={tdLabelClass}>Card</td>
            <td className={tdValueClass}>Rent</td>
            <td className={tdValueClass}>28 December 2022</td>
            <td className={tdValueClass}>10,000</td>
          </tr>
          <tr className={`border-t ${borderColor} rounded-[4px]`}>
            <td className={tdLabelClass}>Mobile</td>
            <td className={tdValueClass}>Wifi subscription</td>
            <td className={tdValueClass}>28 December 2022</td>
            <td className={tdValueClass}>3,500</td>
          </tr>
          <tr className={`${borderColor} rounded-[4px]`}>
            <td className="p-4" colSpan="4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryTable;
