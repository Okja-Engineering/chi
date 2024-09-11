import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgValueNone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.5.877a6.623 6.623 0 0 0-5.023 10.94l-.83.83a.5.5 0 1 0 .707.707l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 1 0-.708-.708l-.83.83A6.6 6.6 0 0 0 7.5.878m3.642 2.274a5.673 5.673 0 0 0-7.992 7.992zm-7.284 8.698a5.673 5.673 0 0 0 7.992-7.991z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgValueNone);
export default ForwardRef;