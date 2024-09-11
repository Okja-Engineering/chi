import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTransparencyGrid = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M0 0h3v3H0zm6 3H3v3H0v3h3v3H0v3h3v-3h3v3h3v-3h3v3h3v-3h-3V9h3V6h-3V3h3V0h-3v3H9V0H6zm0 3V3h3v3zm0 3H3V6h3zm3 0V6h3v3zm0 0H6v3h3z" clipRule="evenodd" opacity={0.25} /></svg>;
const ForwardRef = forwardRef(SvgTransparencyGrid);
export default ForwardRef;