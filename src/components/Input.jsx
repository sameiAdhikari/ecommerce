import React from "react";

const Input = React.forwardRef(function Input(
  { label, type, placeholder, fontsize, ...rest },
  ref
) {
  return (
    <div className="flex flex-col   md:mb-2">
      <label
        htmlFor={`${label}`}
        className={`capitalize font-semibold text-[${fontsize || "1.3rem"}]`}
      >
        {label}
      </label>
      <input
        type={`${type}`}
        id={`${label}`}
        name={`${label}`}
        placeholder={`${placeholder}`}
        {...rest}
        ref={ref}
        className={`text-stone-400 text-[${
          fontsize || "1.2rem"
        }] border-b-2 border-blue-100  md:px-2 md:pt-2 md:pb-1 ouline-none focus:outline-none`}
      />
    </div>
  );
});

export default Input;
