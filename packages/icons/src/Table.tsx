import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTable = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M8 2h4.5a.5.5 0 0 1 .5.5V5H8zM7 5V2H2.5a.5.5 0 0 0-.5.5V5zM2 6v3h5V6zm6 0h5v3H8zm0 4h5v2.5a.5.5 0 0 1-.5.5H8zm-6 2.5V10h5v3H2.5a.5.5 0 0 1-.5-.5m-1-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;