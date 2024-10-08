import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEraser = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M8.36.73a.5.5 0 0 1 .708 0l5.203 5.202a.5.5 0 0 1 0 .707l-5.316 5.316-1.608 1.609a1.5 1.5 0 0 1-2.122 0l-3.789-3.79a1.5 1.5 0 0 1 0-2.12l1.609-1.61zm.354 1.06L4.106 6.398l4.496 4.496 4.608-4.608zm-.82 9.811L3.398 7.107 2.143 8.36a.5.5 0 0 0 0 .708l3.79 3.789a.5.5 0 0 0 .706 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgEraser);
export default ForwardRef;