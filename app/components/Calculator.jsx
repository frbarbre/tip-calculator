"use client";

import { useState } from "react";
import { Bill, Tip, People, Total } from ".";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [tipCustom, setTipCustom] = useState(0);
  const [people, setPeople] = useState(1);
  const [isActive, setIsActive] = useState();
  const [initialized, setInitialized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleReset() {
    setBill(0);
    setTip(0);
    setPeople(1);
    setTipCustom(0);
    setIsActive();
    setInitialized(false)
  }

  const tipTotal = ((tip / 100) * bill) / people;

  const billTotal = tipTotal + bill / people;

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 bg-white p-8 rounded-3xl shadow-xl">
      <form
        onSubmit={handleSubmit}
        className="md:max-w-[312px] w-full flex flex-col justify-between gap-8"
      >
        <Bill
          bill={bill}
          setBill={setBill}
          billTotal={billTotal}
          setInitialized={setInitialized}
          initialized={initialized}
        />
        <Tip
          tip={tip}
          setTip={setTip}
          isActive={isActive}
          setIsActive={setIsActive}
          tipCustom={tipCustom}
          setTipCustom={setTipCustom}
          setInitialized={setInitialized}
        />
        <People
          people={people}
          setPeople={setPeople}
          setInitialized={setInitialized}
        />
      </form>
      <Total
        tipTotal={tipTotal}
        billTotal={billTotal}
        handleReset={handleReset}
        initialized={initialized}
      />
    </div>
  );
}
