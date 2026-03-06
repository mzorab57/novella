import React from "react";
import { Aos } from "./aos";

const Parallax = ({ children, className = "", animation = "fade-up", delay = 0 }) => {
  return (
    <Aos animation={animation} delay={delay} className={className}>
      <div className="relative overflow-hidden">{children}</div>
    </Aos>
  );
};

export default Parallax;
