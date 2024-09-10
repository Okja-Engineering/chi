import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMove = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.818.932a.45.45 0 0 0-.636 0l-1.75 1.75a.45.45 0 1 0 .636.636L7 2.386V5.5a.5.5 0 0 0 1 0V2.386l.932.932a.45.45 0 0 0 .636-.636zM8 9.5a.5.5 0 0 0-1 0v3.114l-.932-.932a.45.45 0 0 0-.636.636l1.75 1.75a.45.45 0 0 0 .636 0l1.75-1.75a.45.45 0 0 0-.636-.636L8 12.614zm1-2a.5.5 0 0 1 .5-.5h3.114l-.932-.932a.45.45 0 0 1 .636-.636l1.75 1.75a.45.45 0 0 1 0 .636l-1.75 1.75a.45.45 0 0 1-.636-.636L12.614 8H9.5a.5.5 0 0 1-.5-.5M3.318 6.068 2.386 7H5.5a.5.5 0 0 1 0 1H2.386l.932.932a.45.45 0 0 1-.636.636l-1.75-1.75a.45.45 0 0 1 0-.636l1.75-1.75a.45.45 0 1 1 .636.636" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMove);
export default ForwardRef;