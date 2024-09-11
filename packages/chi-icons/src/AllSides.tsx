import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAllSides = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5.75 9.75 3h-4.5zm0 13.5L9.75 12h-4.5zm-4.5-9L.75 7.5 3 9.75zM14.25 7.5 12 5.25v4.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAllSides);
export default ForwardRef;