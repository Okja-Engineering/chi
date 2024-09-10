import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaptop = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2 4.25A.25.25 0 0 1 2.25 4h10.5a.25.25 0 0 1 .25.25v7.25H2zM2.25 3C1.56 3 1 3.56 1 4.25V12H0v.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V12h-1V4.25C14 3.56 13.44 3 12.75 3z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;