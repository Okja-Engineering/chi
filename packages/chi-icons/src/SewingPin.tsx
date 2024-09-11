import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSewingPin = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M6 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m2 2.45a2.5 2.5 0 1 0-1 0v7.55a.5.5 0 0 0 1 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgSewingPin);
export default ForwardRef;