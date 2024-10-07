import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Button = ({
  text = "button",
  className,
  type = "",
  onClick = () => {},
  ...props
}) => {
  return (
    <div
      className={`bg-black flex gap-2 justify-center items-center  cursor-pointer px-5 py-2 rounded-sm hover:bg-slate-400 ${className} text-white font-bold`}
      {...props}
      onClick={onClick}
    >
      {type === "" ? (
        ""
      ) : type === "Add" ? (
        <IoIosPersonAdd className="h-5 w-5" />
      ) : type === "edit" ? (
        <MdModeEditOutline className="h-5 w-5" />
      ) : (
        <RiDeleteBin5Fill  className="h-5 w-5"/>
      )}
      {text}
    </div>
  );
};

export default Button;
