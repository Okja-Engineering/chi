import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignLeft = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M.5 1a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 1 0V9h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H1V1.5A.5.5 0 0 0 .5 1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAlignLeft);
export default ForwardRef;