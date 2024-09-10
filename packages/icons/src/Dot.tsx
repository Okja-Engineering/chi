import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDot = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5 9.125a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25m0 1a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgDot);
export default ForwardRef;