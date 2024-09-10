import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderDotted = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.5 6.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m3.125.875a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgBorderDotted);
export default ForwardRef;