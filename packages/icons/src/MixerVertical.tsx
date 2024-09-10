import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMixerVertical = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M5 1.5a.5.5 0 0 0-1 0V7q0 .025.002.05a2.5 2.5 0 0 0 0 4.9L4 12v1.5a.5.5 0 0 0 1 0V12q0-.025-.002-.05a2.5 2.5 0 0 0 0-4.9L5 7zm6 0a.5.5 0 0 0-1 0V3q0 .025.002.05a2.5 2.5 0 0 0 0 4.9L10 8v5.5a.5.5 0 0 0 1 0V8q0-.025-.002-.05a2.5 2.5 0 0 0 0-4.9L11 3zM4.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMixerVertical);
export default ForwardRef;