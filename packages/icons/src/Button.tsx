import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgButton = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2 5h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M0 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m2.25.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m3.75-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgButton);
export default ForwardRef;