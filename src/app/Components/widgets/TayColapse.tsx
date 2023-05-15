'use client'
import classNames from "classnames";
import { ReactNode } from "react-markdown/lib/ast-to-react";

const TayColapse = ({ children, isOpen }: { children: ReactNode, isOpen: boolean}) => {

  return (
    <div className="transition-height overflow-hidden">
      <div
        className={classNames(
          "transition-opacity",
          isOpen ? "opacity-100" : "opacity-50",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
          "h-auto",
          `h-${isOpen?  "auto" : 0}`
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default TayColapse
