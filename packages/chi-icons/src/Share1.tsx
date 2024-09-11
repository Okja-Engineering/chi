import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShare1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.713 1.164a2.5 2.5 0 1 1 0-2.328l3.391-2.12A2.5 2.5 0 1 1 14 3.5a2.5 2.5 0 0 1-4.484 1.52l-3.53 2.207a2.5 2.5 0 0 1 0 .546l3.53 2.206a2.5 2.5 0 1 1-.411.804zM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgShare1);
export default ForwardRef;