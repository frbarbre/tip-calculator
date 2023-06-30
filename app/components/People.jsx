export default function People(props) {
  function handleChange(e) {
    props.setInitialized(true);
    const result = e.target.value.replace(/\D/g, "");
    props.setPeople(result);
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="people">Number of People</label>
      <input
        type="text"
        name="people"
        value={props.people}
        onChange={handleChange}
        min={1}
        maxLength={2}
        placeholder="1"
        className={`text-right w-full outline-none transition-all rounded-md my-2 px-6 py-1 text-tip-dark-cyan text-[24px] focus:ring-[2px] ${
          props.people === "0" ? "focus:ring-red-500" : "focus:ring-tip-cyan"
        }`}
      />
    </div>
  );
}
