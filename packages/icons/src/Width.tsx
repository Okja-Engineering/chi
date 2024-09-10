import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWidth = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M4.818 4.682a.45.45 0 0 1 0 .636L3.086 7.05h8.828l-1.732-1.732a.45.45 0 0 1 .636-.636l2.5 2.5a.45.45 0 0 1 0 .636l-2.5 2.5a.45.45 0 0 1-.636-.636l1.732-1.732H3.086l1.732 1.732a.45.45 0 1 1-.636.636l-2.5-2.5a.45.45 0 0 1 0-.636l2.5-2.5a.45.45 0 0 1 .636 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgWidth);
export default ForwardRef;