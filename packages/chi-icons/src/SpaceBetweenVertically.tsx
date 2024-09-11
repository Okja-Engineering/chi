import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpaceBetweenVertically = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H9v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1H1.5A.5.5 0 0 1 1 .5M7 9a1 1 0 0 0-1 1v4H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9v-4a1 1 0 0 0-1-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgSpaceBetweenVertically);
export default ForwardRef;