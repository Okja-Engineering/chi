import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownload = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5 1.05a.45.45 0 0 1 .45.45v6.914l2.232-2.232a.45.45 0 1 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636L7.05 8.414V1.5a.45.45 0 0 1 .45-.45M2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A1 1 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12c0 1.104-.894 2-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;