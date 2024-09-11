import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMixerHorizontal = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M5.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M3 5q.025 0 .05-.002a2.5 2.5 0 0 0 4.9 0L8 5h5.5a.5.5 0 0 0 0-1H8q-.025 0-.05.002a2.5 2.5 0 0 0-4.9 0L3 4H1.5a.5.5 0 0 0 0 1zm8.95 5.998a2.5 2.5 0 0 1-4.9 0L7 11H1.5a.5.5 0 0 1 0-1H7q.025 0 .05.002a2.5 2.5 0 0 1 4.9 0L12 10h1.5a.5.5 0 0 1 0 1H12q-.025 0-.05-.002M8 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMixerHorizontal);
export default ForwardRef;