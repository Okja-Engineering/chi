import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgColorWheel = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0m2.904-4.284A5.65 5.65 0 0 1 7.1 1.84v4.693zm-.565.565A5.65 5.65 0 0 0 1.84 7.1h4.693zM6.534 7.9H1.841a5.65 5.65 0 0 0 1.375 3.319zm-2.753 3.884A5.65 5.65 0 0 0 7.1 13.16V8.466zM7.9 8.466v4.693a5.65 5.65 0 0 0 3.318-1.375zm3.884 2.752A5.65 5.65 0 0 0 13.16 7.9H8.466zM8.466 7.1h4.693a5.65 5.65 0 0 0-1.375-3.319zm2.753-3.884A5.65 5.65 0 0 0 7.9 1.84v4.693z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgColorWheel);
export default ForwardRef;