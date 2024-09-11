import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDragHandleHorizontal = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2.5 4.1a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8zm0 2a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8zm-.4 2.4c0-.22.18-.4.4-.4h10a.4.4 0 0 1 0 .8h-10a.4.4 0 0 1-.4-.4m.4 1.6a.4.4 0 0 0 0 .8h10a.4.4 0 0 0 0-.8z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgDragHandleHorizontal);
export default ForwardRef;