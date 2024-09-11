import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMaskOff = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1 2h13v11H1zM0 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4.875 5.5a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0M7.5 3.875a3.625 3.625 0 1 0 0 7.25 3.625 3.625 0 0 0 0-7.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMaskOff);
export default ForwardRef;