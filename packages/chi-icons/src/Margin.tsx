import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMargin = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M1.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M1.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M13.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M13.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 0h5v5H5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMargin);
export default ForwardRef;