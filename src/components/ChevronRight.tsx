import React, { FunctionComponent, SVGAttributes } from 'react';

type Props = SVGAttributes<SVGSVGElement>;

const ChevronRight: FunctionComponent<Props> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default ChevronRight;
