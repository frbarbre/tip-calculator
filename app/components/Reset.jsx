export default function Reset(props) {

  return (
    <button
      className={`${
        props.initialized
          ? "bg-tip-cyan pointer-events-auto"
          : "pointer-events-none bg-[#0D686D]"
      } transition-all w-full text-tip-dark-cyan py-3 rounded-lg hover:bg-tip-medium-gray uppercase`}
      onClick={props.handleReset}
    >
      Reset
    </button>
  );
}
