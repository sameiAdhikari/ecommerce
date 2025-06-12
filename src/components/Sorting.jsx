import { useState } from "react";

function Sorting() {
  const [active, setActive] = useState(true);
  function handleActive(type) {
    if ((type === "all" && !active) || (type === "deals" && active)) {
      setActive(!active);
    }
  }
  return (
    <div>
      <button
        className={`border border-gray-300 md:px-6 md:mr-3 md:py-[2px] rounded-[15px] ${
          active === true ? "border-2 border-stone-900 font-semibold" : ""
        }`}
        onClick={() => handleActive("all")}
      >
        All
      </button>
      <button
        className={`border border-gray-300 md:px-6 md:mr-3 md:pt-[2px] rounded-[15px] cursor-pointer ${
          !active === true ? "border-2 border-stone-900 font-semibold" : ""
        }`}
        onClick={() => handleActive("deals")}
      >
        Deals
      </button>
    </div>
  );
}

export default Sorting;
