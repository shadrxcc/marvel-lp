import { forwardRef } from "react";
import { Check, X } from "react-feather";

const Switch = forwardRef((props, forwardRef) => {
  return (
    <>
      <label className="cursor-pointer">
        <input type="checkbox" className="hidden" ref={forwardRef} {...props} />
        <div
          className={`${
            props.checked ? "bg-white" : "bg-gray-200"
          } w-[67px] h-[28px] p-1 rounded-full`}
        >
          <div
            className={`w-fit shadow-sm rounded-full transition-all duration-300 text-white ${
              props.checked
                ? "bg-red-700 translate-x-10 rotate-0"
                : "bg-gray-400 -rotate-180"
            }`}
          >
            {props.checked ? <Check size={20} /> : <X size={20} />}
          </div>
        </div>
      </label>
    </>
  );
});

export default Switch;
