import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContainer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M5 13h5V2H5zm-1 0a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zm9.5-11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M2 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgContainer);
export default ForwardRef;