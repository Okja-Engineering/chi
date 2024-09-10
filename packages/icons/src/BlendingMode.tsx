import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBlendingMode = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M3 9c0-2.5 1.5-4.75 4.5-7.5 3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 1 1-9 0m7.952-.697c-1.279-.482-2.664.16-3.962.76-1.057.488-2.056.95-2.893.759A3.5 3.5 0 0 1 4 9c0-1.888 1.027-3.728 3.5-6.126 2.168 2.102 3.225 3.776 3.452 5.43" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgBlendingMode);
export default ForwardRef;