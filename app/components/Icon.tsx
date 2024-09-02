import React from "react";

import spinner from "@/public/spinner-circle.gif";
// import success from "../assets/success.gif";
// import globeMusic from "../assets/globe-music.gif";
// import error from "../assets/error.gif";
export type IconType = "arrow" | "edit" | "cross" | "spiral";

export const Icon = ({ type, style }: { type: IconType; style?: string }) => {
  if (type === "arrow") {
    return (
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    );
  }
  if (type === "edit") {
    return (
      <svg
        className="rtl:rotate-180 w-4 h-4 ms-2 mb-0.5"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    );
  }
  if (type === "cross") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className={style}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    );
  }
  if (type === "spiral") {
    return <img src={spinner as any as string} alt="" className={style} />;
  }
};
