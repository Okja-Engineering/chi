import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrosshair2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5 0a.5.5 0 0 1 .5.5v1.307A5.624 5.624 0 0 1 13.007 7H14.5a.5.5 0 0 1 0 1h-1.511A5.625 5.625 0 0 1 8 12.989V14.5a.5.5 0 0 1-1 0v-1.493A5.624 5.624 0 0 1 1.807 8H.5a.5.5 0 0 1 0-1h1.289A5.624 5.624 0 0 1 7 1.789V.5a.5.5 0 0 1 .5-.5M8 12.032V9.5a.5.5 0 0 0-1 0v2.554A4.675 4.675 0 0 1 2.763 8H5.5a.5.5 0 0 0 0-1H2.742A4.674 4.674 0 0 1 7 2.742V5.5a.5.5 0 0 0 1 0V2.763A4.675 4.675 0 0 1 12.054 7H9.5a.5.5 0 0 0 0 1h2.532A4.675 4.675 0 0 1 8 12.032" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCrosshair2);
export default ForwardRef;