import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBadge = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M3.5 6h8a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 1 1 0-3M1 7.5A2.5 2.5 0 0 1 3.5 5h8a2.5 2.5 0 0 1 0 5h-8A2.5 2.5 0 0 1 1 7.5M4.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgBadge);
export default ForwardRef;