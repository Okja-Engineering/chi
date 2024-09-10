import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThickArrowUp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5 1a.5.5 0 0 1 .407.21l5 7A.5.5 0 0 1 12.5 9H10v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V9H2.5a.5.5 0 0 1-.407-.79l5-7A.5.5 0 0 1 7.5 1M3.472 8H5.5a.5.5 0 0 1 .5.5V11h3V8.5a.5.5 0 0 1 .5-.5h2.028L7.5 2.36z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgThickArrowUp);
export default ForwardRef;