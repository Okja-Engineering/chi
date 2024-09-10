import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStretchHorizontally = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5V6H1V1.5a.5.5 0 1 0-1 0v12a.5.5 0 0 0 1 0V9h13v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgStretchHorizontally);
export default ForwardRef;