import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckbox = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M3 3h9v9H3zM2 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm8.35 2.511a.5.5 0 0 0-.825-.566L6.64 9.15l-1.443-1.74a.5.5 0 0 0-.77.638l1.866 2.25a.5.5 0 0 0 .797-.037z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCheckbox);
export default ForwardRef;