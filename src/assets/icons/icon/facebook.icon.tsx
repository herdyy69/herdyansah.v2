import React from "react";

export const Facebook = ({
  props,
}: {
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 10.3252V14.3252H10V21.3252H14V14.3252H17L18 10.3252H14V8.3252C14 8.05998 14.1054 7.80563 14.2929 7.61809C14.4804 7.43055 14.7348 7.3252 15 7.3252H18V3.3252H15C13.6739 3.3252 12.4021 3.85198 11.4645 4.78966C10.5268 5.72734 10 6.99911 10 8.3252V10.3252H7Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
