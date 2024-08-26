"use client";

import type { ComponentProps, FC } from "react";
import { useAccordionContext } from "./AccordionPanelContext";


export interface AccordionContentProps extends ComponentProps<"div"> { }

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  return (
    <div
        //   hidden={!isOpen}
      className={`${className || ''} faq-item ${isOpen ? "faq-item-expanded" : ""}`}
      {...props}
      >                       
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              
      {children}
          </div>
    </div>
  );
};