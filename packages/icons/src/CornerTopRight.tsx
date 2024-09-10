import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCornerTopRight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M5.123 3H3.5a.5.5 0 0 0 0 1h1.6c1.128 0 1.945 0 2.586.053.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403C11 7.955 11 8.772 11 9.9v1.6a.5.5 0 0 0 1 0V9.877c0-1.1 0-1.958-.056-2.645-.057-.698-.175-1.265-.435-1.775A4.5 4.5 0 0 0 9.544 3.49c-.51-.26-1.077-.377-1.775-.434C7.08 3 6.224 3 5.123 3" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCornerTopRight);
export default ForwardRef;