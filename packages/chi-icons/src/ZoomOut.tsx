import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoomOut = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M6.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m0 1a4.48 4.48 0 0 0 2.809-.984l2.837 2.838a.5.5 0 0 0 .708-.708L10.016 9.31A4.5 4.5 0 1 0 6.5 11M4.75 6a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgZoomOut);
export default ForwardRef;