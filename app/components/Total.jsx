import { TipTotal, BillTotal, Reset } from ".";

export default function Total(props) {
  return (
    <div className="bg-tip-dark-cyan p-8 rounded-2xl w-screenCalc overflow-auto mx-auto md:w-full md:min-w-[360px] flex flex-col justify-between">
      <div>
        <TipTotal tipTotal={props.tipTotal} />
        <BillTotal billTotal={props.billTotal} />
      </div>
      <Reset handleReset={props.handleReset} initialized={props.initialized} />
    </div>
  );
}
