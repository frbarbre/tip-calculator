export default function Bill(props) {
  function handleChange(e) {
    props.setInitialized(true);
    const result = e.target.value.replace(/\D/g, "");
    props.setBill(result);
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="bill">Bill</label>
      <div className="relative">
        <img
          src="/icon-dollar.svg"
          alt="dollar-sign"
          className="absolute top-[50%] left-[20px] translate-y-[-50%]"
        />
        <input
          type="text"
          name="bill"
          value={props.bill}
          onChange={handleChange}
          placeholder="0"
          className={`text-right w-full outline-none transition-all rounded-md my-2 px-6 py-1 text-tip-dark-cyan text-[24px] ${
            props.bill === "" ? "" : "focus:ring-[2px] focus:ring-tip-cyan"
          }`}
          min={0}
          maxLength={4}
        />
      </div>
    </div>
  );
}
