import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPieChart = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.85 7.5a5.65 5.65 0 1 1 11.3 0 5.65 5.65 0 0 1-11.3 0M7.5.85a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3M7 8V3.128q.245-.027.5-.028A4.4 4.4 0 0 1 11.872 8z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgPieChart);
export default ForwardRef;