import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTarget = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M.9 7.5a6.6 6.6 0 1 1 13.2 0 6.6 6.6 0 0 1-13.2 0m6.6-5.7a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4M3.075 7.5a4.425 4.425 0 1 1 8.85 0 4.425 4.425 0 0 1-8.85 0M7.5 3.925a3.575 3.575 0 1 0 0 7.15 3.575 3.575 0 0 0 0-7.15m0 1.325a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6.05 7.5a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgTarget);
export default ForwardRef;