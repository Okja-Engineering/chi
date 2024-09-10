import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignTop = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.5 0a.5.5 0 0 0 0 1H6v11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1h4.5a.5.5 0 0 0 0-1h-12" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAlignTop);
export default ForwardRef;