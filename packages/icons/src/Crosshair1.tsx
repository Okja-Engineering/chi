import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrosshair1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M.877 7.502a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0M1.85 7A5.676 5.676 0 0 1 7 1.849V4.5a.5.5 0 1 0 1 0V1.849A5.68 5.68 0 0 1 13.155 7H10.5a.5.5 0 0 0 0 1h2.656A5.676 5.676 0 0 1 8 13.156V10.5a.5.5 0 0 0-1 0v2.655A5.68 5.68 0 0 1 1.849 8H4.5a.5.5 0 0 0 0-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCrosshair1);
export default ForwardRef;