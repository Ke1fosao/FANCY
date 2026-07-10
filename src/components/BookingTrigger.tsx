"use client";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type BookingTriggerProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    service?: string;
  }
>;

export function BookingTrigger({ children, service, onClick, ...props }: BookingTriggerProps) {
  return (
    <button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        window.dispatchEvent(
          new CustomEvent("fancy:booking", {
            detail: { service: service ?? "" },
          }),
        );
      }}
    >
      {children}
    </button>
  );
}
