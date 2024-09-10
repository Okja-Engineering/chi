import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDrawingPinFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707" clipRule="evenodd" /><path fill="#000" fillRule="evenodd" d="M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgDrawingPinFilled);
export default ForwardRef;