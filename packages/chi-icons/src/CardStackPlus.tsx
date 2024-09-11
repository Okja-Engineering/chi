import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCardStackPlus = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5zm0 7.415A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5zM12 11v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11zM5 6.5a.5.5 0 0 1 .5-.5H7V4.5a.5.5 0 0 1 1 0V6h1.5a.5.5 0 0 1 0 1H8v1.5a.5.5 0 0 1-1 0V7H5.5a.5.5 0 0 1-.5-.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCardStackPlus);
export default ForwardRef;