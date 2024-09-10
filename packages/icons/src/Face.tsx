import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFace = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0m3.21 1.714a.5.5 0 1 0-.82.572A4 4 0 0 0 7.5 11.5c1.36 0 2.56-.679 3.283-1.714a.5.5 0 0 0-.82-.572A3 3 0 0 1 7.5 10.5a3 3 0 0 1-2.463-1.286m.338-2.364a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75m5.125-.875a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgFace);
export default ForwardRef;