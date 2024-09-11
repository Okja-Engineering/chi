import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M8.891 2.194a.5.5 0 0 1 .115.697L2.474 12H13.5a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.406-.791l7.1-9.9a.5.5 0 0 1 .697-.115M11.1 6.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M10.4 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.7 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m1.3 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAngle);
export default ForwardRef;