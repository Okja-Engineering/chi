import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStitchesLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.85 7.5q0-.431.063-.844l7.65-4.417q.45.177.859.424L3.77 6.503a.45.45 0 0 0-.234.374.45.45 0 0 0 .196.394l3.592 2.567-3.453 1.994A5.64 5.64 0 0 1 1.85 7.5m6.518 2.775.025-.014 1.448-.836.018-.01 1.451-.838a.45.45 0 0 0 .052-.756L7.828 5.2l3.388-1.957a5.64 5.64 0 0 1 1.849 5.24L5.569 12.81a5.6 5.6 0 0 1-.882-.41zm-.187-.931L4.817 6.939l.692-.4 3.297 2.444zM6.36 6.048l.62-.357 3.296 2.444-.62.358zm1.973-4.137-6.09 3.515a5.65 5.65 0 0 1 6.09-3.515M6.847 13.113q.321.037.653.037a5.65 5.65 0 0 0 5.189-3.41zM7.5.85a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgStitchesLogo);
export default ForwardRef;