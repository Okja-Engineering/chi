import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrackPrevious = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.95 2.75a.55.55 0 1 1 1.1 0v4.533a.5.5 0 0 1 .217-.225l9-4.75A.5.5 0 0 1 13 2.75v9.5a.5.5 0 0 1-.733.442l-9-4.75a.5.5 0 0 1-.217-.225v4.533a.55.55 0 0 1-1.1 0zM4.57 7.5 12 11.42V3.58z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgTrackPrevious);
export default ForwardRef;