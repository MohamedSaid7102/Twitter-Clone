import * as React from "react";

function SvgThreeDots(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="ThreeDots_svg__r-4qtqp9 ThreeDots_svg__r-yyyyoo ThreeDots_svg__r-1xvli5t ThreeDots_svg__r-dnmrzs ThreeDots_svg__r-bnwqim ThreeDots_svg__r-1plcrui ThreeDots_svg__r-lrvibr ThreeDots_svg__r-1hdv0qi"
      width="0.8em"
      height="0.8em"
      {...props}
    >
      <circle cx={5} cy={12} r={2} />
      <circle cx={12} cy={12} r={2} />
      <circle cx={19} cy={12} r={2} />
    </svg>
  );
}

export default SvgThreeDots;
