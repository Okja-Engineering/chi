import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgListBullet = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.5 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M4 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M4.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM2.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgListBullet);
export default ForwardRef;