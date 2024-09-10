import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThickArrowLeft = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1 7.5a.5.5 0 0 0 .21.407l7 5A.5.5 0 0 0 9 12.5V10h2.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H9V2.5a.5.5 0 0 0-.79-.407l-7 5A.5.5 0 0 0 1 7.5m7-4.028V5.5a.5.5 0 0 0 .5.5H11v3H8.5a.5.5 0 0 0-.5.5v2.028L2.36 7.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgThickArrowLeft);
export default ForwardRef;