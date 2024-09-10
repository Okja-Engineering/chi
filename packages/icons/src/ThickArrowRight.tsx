import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThickArrowRight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M14 7.5a.5.5 0 0 1-.21.407l-7 5A.5.5 0 0 1 6 12.5V10H3.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H6V2.5a.5.5 0 0 1 .79-.407l7 5A.5.5 0 0 1 14 7.5M7 3.472V5.5a.5.5 0 0 1-.5.5H4v3h2.5a.5.5 0 0 1 .5.5v2.028L12.64 7.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgThickArrowRight);
export default ForwardRef;