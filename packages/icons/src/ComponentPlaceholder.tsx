import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentPlaceholder = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M7.854 1.49a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m.707 1.414a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707M4.318 4.318a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707M2.904 5.732a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707m-.707 2.122a.5.5 0 0 0 .064-.63.506.506 0 0 0-.771-.078.5.5 0 0 0 .707.708m.707 1.414a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707m1.414.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707m1.414 2.121a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707m1.415 1.414a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707m2.12-1.414a.5.5 0 1 0-.706-.707.5.5 0 0 0 .707.707m1.415-2.121a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707m1.414-.707a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707m.707-2.122a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707M11.39 5.732a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707m-.707-1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m-4.95-1.414a.5.5 0 1 1 .707.707.5.5 0 0 1-.707-.707" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgComponentPlaceholder);
export default ForwardRef;