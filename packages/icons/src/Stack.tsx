import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStack = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.754 1.82a.5.5 0 0 0-.508 0l-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86zM7.5 8.17 2.983 5.5 7.5 2.83l4.517 2.67zm-5.246.15a.5.5 0 0 0-.508.86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 1 0-.508-.86L7.5 11.42z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgStack);
export default ForwardRef;