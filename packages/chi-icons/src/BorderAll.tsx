import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderAll = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M.25 1A.75.75 0 0 1 1 .25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H1A.75.75 0 0 1 .25 14zm1.5.75v11.5h11.5V1.75z" clipRule="evenodd" /><rect width={1} height={1} x={7} y={5} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={3} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={7} fill="#000" rx={0.5} /><rect width={1} height={1} x={5} y={7} fill="#000" rx={0.5} /><rect width={1} height={1} x={3} y={7} fill="#000" rx={0.5} /><rect width={1} height={1} x={9} y={7} fill="#000" rx={0.5} /><rect width={1} height={1} x={11} y={7} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={9} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={11} fill="#000" rx={0.5} /></svg>;
const ForwardRef = forwardRef(SvgBorderAll);
export default ForwardRef;