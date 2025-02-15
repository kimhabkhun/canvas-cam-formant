import React from "react";

const Spacing: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_44)">
        <path
          d="M5.5 5.83332H7.58333L4.66667 2.91666L1.75 5.83332H3.83333V14.1667H1.75L4.66667 17.0833L7.58333 14.1667H5.5V5.83332ZM8.83333 4.16666V5.83332H18.8333V4.16666H8.83333ZM8.83333 15.8333H18.8333V14.1667H8.83333V15.8333ZM8.83333 10.8333H18.8333V9.16666H8.83333V10.8333Z"
          fill="#27384C"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_44">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Spacing;
