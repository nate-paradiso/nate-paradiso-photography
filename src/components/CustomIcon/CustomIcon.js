// Create a button that calls a context function to set a new open state when clicked
import { useContext } from "react";
import { MyContext } from "../../App";
import "./CustomIcon.scss";

export const CustomIcon = () => {
  const ctx = useContext(MyContext);

  return (
    <div className="custom-icon" onClick={ctx.toggleMenu}>
      ☰
    </div>
  );
};
