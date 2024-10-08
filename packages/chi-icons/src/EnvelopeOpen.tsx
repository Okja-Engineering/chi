import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelopeOpen = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.947.165a1 1 0 0 0-.894 0l-6.5 3.25A1 1 0 0 0 0 4.309V12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V4.309a1 1 0 0 0-.553-.894zm5.622 3.928L7.5 1.06 1.431 4.093 7.5 7.291zM1 4.883V12h13V4.884L7.71 8.198a.45.45 0 0 1-.42 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgEnvelopeOpen);
export default ForwardRef;