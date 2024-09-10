import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentNone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.854 1.49a.5.5 0 0 0-.708 0L1.49 7.146a.5.5 0 0 0 0 .708l2.475 2.474-2.319 2.318a.5.5 0 0 0 .708.708l2.318-2.318 2.475 2.474a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708l-2.475-2.474 2.318-2.318a.5.5 0 1 0-.708-.708l-2.318 2.318zM9.62 4.672 7.5 2.55 2.55 7.5l2.122 2.121zM5.38 10.328 7.5 12.45l4.95-4.95-2.121-2.121z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgComponentNone);
export default ForwardRef;