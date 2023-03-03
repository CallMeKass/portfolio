import React from 'react';

// TODO: add hamburger menu to navbar
// Everything fits on mobile so this is low priority

export interface LogoProps {
  color?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ color, className, ...props }) => {
  const xColor = `${color ? color : '#000000'}`;
  const xClassName = `${className ? className : ''}`;

  return (
    <svg
      className={xClassName}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3_6)">
        <path
          d="M938.75 10.4999V654.25C938.75 686.75 937.917 716.333 936.25 743C934.583 768.833 931.25 792.583 926.25 814.25C921.25 835.917 914.167 855.5 905 873C896.667 890.5 885.833 907.167 872.5 923C845 955.5 810.417 978 768.75 990.5C727.083 1003.83 682.917 1010.5 636.25 1010.5V879.25C657.917 879.25 676.667 875.917 692.5 869.25C708.333 862.583 721.25 854.25 731.25 844.25C746.25 830.917 755.833 813.417 760 791.75C765 770.083 767.5 745.917 767.5 719.25V10.4999H938.75Z"
          fill={xColor}
        />
        <path
          d="M15.25 798V10.4999H186.5V341.75L457.75 10.4999H670.25L376.5 354.25L695.25 798H484L251.5 461.75L186.5 530.5V798H15.25Z"
          fill={xColor}
        />
      </g>
    </svg>
  );
};

export default Logo;
