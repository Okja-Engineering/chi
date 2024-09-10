import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderSplit = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<rect width={1} height={1} x={7} y={5.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={3.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={7.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={13.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={1.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={13} y={7.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={5} y={7.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={3} y={7.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={9} y={7.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={11} y={7.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={9.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={7} y={11.025} fill="#000" rx={0.5} /><rect width={1} height={1} x={1} y={7.025} fill="#000" rx={0.5} /><path fill="#000" fillRule="evenodd" d="M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1zM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1zM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5m12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgBorderSplit);
export default ForwardRef;