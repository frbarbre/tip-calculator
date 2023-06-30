export default function TipTotal(props) {

    const tipTotal = (Math.round(props.tipTotal * 100) / 100).toFixed(2)

    return (
      <div className="flex justify-between gap-x-4 flex-wrap md:flex-nowrap items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-[12px]">Tip Amount</h3>
          <p className="text-tip-dark-gray text-[10px]">/ person</p>
        </div>
        <h2 className="text-[48px] text-tip-cyan">${tipTotal}</h2>
      </div>
    );
  }