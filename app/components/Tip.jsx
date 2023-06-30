"use client";

import { useEffect } from "react";

export default function Tip(props) {
  function handleChange(e) {
    props.setInitialized(true)
    const result = e.target.value.replace(/\D/g, "");
    props.setTipCustom(result);
    props.setIsActive();
  }

  useEffect(() => {
    props.setTip(props.tipCustom);
  }, [props.tipCustom]);

  function handleClick(tip) {
    props.setTip(tip);
    props.setIsActive(tip);
  }

  return (
    <div>
      <h2 className="mb-2">Select Tip %</h2>
      <div className="flex flex-wrap gap-3">
        <button
          className={`${
            props.isActive === 5
              ? "bg-tip-cyan text-gray-700"
              : "text-white bg-tip-dark-cyan"
          } w-24 h-10 rounded-md text-[18px] transition-all`}
          onClick={() => handleClick(5)}
        >
          5%
        </button>
        <button
          className={`${
            props.isActive === 10
              ? "bg-tip-cyan text-gray-700"
              : "text-white bg-tip-dark-cyan"
          } w-24 h-10 rounded-md text-[18px] transition-all`}
          onClick={() => handleClick(10)}
        >
          10%
        </button>
        <button
          className={`${
            props.isActive === 15
              ? "bg-tip-cyan text-gray-700"
              : "text-white bg-tip-dark-cyan"
          } w-24 h-10 rounded-md text-[18px] transition-all`}
          onClick={() => handleClick(15)}
        >
          15%
        </button>
        <button
          className={`${
            props.isActive === 25
              ? "bg-tip-cyan text-gray-700"
              : "text-white bg-tip-dark-cyan"
          } w-24 h-10 rounded-md text-[18px] transition-all`}
          onClick={() => handleClick(25)}
        >
          25%
        </button>
        <button
          className={`${
            props.isActive === 50
              ? "bg-tip-cyan text-gray-700"
              : "text-white bg-tip-dark-cyan"
          } w-24 h-10 rounded-md text-[18px] transition-all`}
          onClick={() => handleClick(50)}
        >
          50%
        </button>
        <input
          type="text"
          value={props.tipCustom === 0 ? "" : props.tipCustom}
          onChange={handleChange}
          placeholder="Custom"
          min={0}
          maxLength={3}
          className="w-24 h-10 rounded-lg outline-none text-center text-[18px] text-tip-cyan focus:ring-[2px] focus:ring-tip-cyan"
        />
      </div>
    </div>
  );
}
