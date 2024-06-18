import React from "react";
type Button = {
  label: string;
  style?: string;
  type?: "button" | "submit" | "reset" | undefined;
};
const Button = (props: Button) => {
  return (
    <button
      className={`${props.style ? props.style + " " : ""}mb-12 mt-10 h-[56px] w-full rounded-md border-[1px] border-black bg-black text-center font-medium uppercase text-white`}
      type={props.type ?? "button"}
    >
      {props.label}
    </button>
  );
};

export default Button;
