import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLockOpen2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M9 3.636c0-.876.242-1.524.642-1.95.395-.421 1.001-.686 1.86-.686.946 0 1.582.306 1.97.806.331.427.528 1.037.528 1.827h1c0-.95-.237-1.794-.738-2.44C13.64.39 12.674 0 11.503 0c-1.073 0-1.967.338-2.59 1.002C8.294 1.662 8 2.582 8 3.636V6H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9zM1 7h9v6H1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLockOpen2);
export default ForwardRef;