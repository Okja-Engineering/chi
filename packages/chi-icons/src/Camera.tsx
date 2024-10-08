import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamera = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2 .25A.25.25 0 0 1 2.25 4h2.5a.25.25 0 0 1 .25.25v1.505a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25zm10.101 3.334a2.601 2.601 0 1 1-5.202 0 2.601 2.601 0 0 1 5.202 0m1 0a3.601 3.601 0 1 1-7.202 0 3.601 3.601 0 0 1 7.202 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;