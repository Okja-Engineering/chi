import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockClosed = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M5 4.636c0-.876.242-1.53.643-1.962.396-.427 1.003-.696 1.858-.696s1.462.269 1.857.694c.4.431.642 1.085.642 1.961V6H5zM4 6V4.636c0-1.055.293-1.978.91-2.643.623-.67 1.517-1.015 2.591-1.015s1.969.344 2.59 1.014c.617.664.909 1.587.909 2.641V6h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM3 7h9v6H3z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLockClosed);
export default ForwardRef;