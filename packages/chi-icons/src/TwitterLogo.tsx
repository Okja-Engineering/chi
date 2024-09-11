import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitterLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.233 4.696c0-1.727 1.4-3.127 3.127-3.127 1.014 0 1.823.479 2.366 1.175a5.3 5.3 0 0 0 1.625-.629 2.63 2.63 0 0 1-1.148 1.45l.002.003a5.3 5.3 0 0 0 1.5-.413l-.001.002a5.3 5.3 0 0 1-1.248 1.313q.04.266.04.53c0 3.687-2.809 7.975-7.975 7.975a7.93 7.93 0 0 1-4.296-1.26.5.5 0 0 1-.108-.748.45.45 0 0 1 .439-.215c.915.108 1.83-.004 2.636-.356a3.09 3.09 0 0 1-1.69-1.876.45.45 0 0 1 .103-.448 3.07 3.07 0 0 1-1.045-2.31v-.034a.45.45 0 0 1 .365-.442 3.1 3.1 0 0 1-.344-1.416c0-.468.003-1.058.332-1.59a.45.45 0 0 1 .324-.208.5.5 0 0 1 .537.161 6.96 6.96 0 0 0 4.46 2.507zm-1.712 7.279a7 7 0 0 1-2.248-.373 5.3 5.3 0 0 0 2.39-1.042.45.45 0 0 0-.27-.804 2.17 2.17 0 0 1-1.715-.888q.285-.023.557-.096a.45.45 0 0 0-.03-.876 2.18 2.18 0 0 1-1.643-1.474q.302.073.623.084a.45.45 0 0 0 .265-.824A2.18 2.18 0 0 1 2.48 3.87q-.001-.25.013-.453a7.95 7.95 0 0 0 5.282 2.376.5.5 0 0 0 .513-.61 2.127 2.127 0 0 1 2.071-2.614c1.234 0 2.136 1.143 2.136 2.432 0 3.256-2.476 6.974-6.975 6.974" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgTwitterLogo);
export default ForwardRef;