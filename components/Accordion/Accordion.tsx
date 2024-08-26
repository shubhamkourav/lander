"use client"
import { Children, cloneElement, ComponentProps, FC, ReactElement, useMemo, useState } from "react";
import { AccordionPanel, AccordionPanelProps } from "./AccordionPanel";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";

export interface AccordionProps extends ComponentProps<"div"> {
    alwaysOpen?: boolean;
    arrowIcon?: FC<ComponentProps<"svg">>;
    children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
    flush?: boolean;
    collapseAll?: boolean;
}
  

const AccordionComponent: FC<AccordionProps> = ({
    children,
    collapseAll = false,
    ...props
  }) => {
    const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);
  
    const panels = useMemo(
      () =>
        Children.map(children, (child, i) =>
          cloneElement(child, {
            isOpen: isOpen === i,
            setOpen: () => setOpen(isOpen === i ? -1 : i),
          }),
        ),
      [children, isOpen],
    );
  
  
    return (
      <div
        {...props}
      >
        {panels}
      </div>
    );
  };
  
  AccordionComponent.displayName = "Accordion";
  AccordionPanel.displayName = "Accordion.Panel";
  AccordionTitle.displayName = "Accordion.Title";
  AccordionContent.displayName = "Accordion.Content";
  
  export const Accordion = Object.assign(AccordionComponent, {
    // Panel: AccordionPanel,
    // Title: AccordionTitle,
    // Content: AccordionContent,
  });