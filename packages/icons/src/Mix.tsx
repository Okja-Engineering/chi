import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMix = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2.15 4a1.85 1.85 0 1 1 3.7 0 1.85 1.85 0 0 1-3.7 0M4 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M5.82 11 2.5 12.837V9.163zM2.64 8.212a.7.7 0 0 0-1.039.612v4.352a.7.7 0 0 0 1.039.613l3.933-2.176a.7.7 0 0 0 0-1.225zM8.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm.9.2v3.6h3.6V9.2zm4.243-7.007a.45.45 0 0 0-.636-.636L11 3.364 9.193 1.557a.45.45 0 1 0-.636.636L10.364 4 8.557 5.807a.45.45 0 1 0 .636.636L11 4.636l1.807 1.807a.45.45 0 0 0 .636-.636L11.636 4z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMix);
export default ForwardRef;