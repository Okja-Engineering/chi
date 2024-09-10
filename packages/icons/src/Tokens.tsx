import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTokens = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M3 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M10.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-7 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M4.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6-1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgTokens);
export default ForwardRef;