"use client";

import type { ComponentProps, FC, ReactElement } from "react";
import { useAccordionContext } from "./AccordionPanelContext";

export interface AccordionTitleProps extends ComponentProps<"button"> {
    showIcon?: boolean,
    iconClass?: string,
    titleClass?: string;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
    children,
    titleClass,
    showIcon = false,
    iconClass,
    ...props
}) => {
    const { isOpen, setOpen } = useAccordionContext();
    const onClick = () => typeof setOpen !== "undefined" && setOpen();


    return (
        <h3 className="relative z-10">

            <button
                onClick={onClick}
                type="button"
                {...props}
            >
                <span className={titleClass}>
                    {children}
                </span>
                {showIcon ? (
                    <svg className={`${iconClass} ${isOpen? '-rotate-180':''} transition-transform delay-70 duration-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                ):<></>}
            </button>
        </h3>

    );
};