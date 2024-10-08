import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFontFamily = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" d="M2.5 4.5C2.5 3.099 3.599 2 5 2h7.499a.5.5 0 0 1 .001 1H8.692l-.287.855L7.343 7H8.5a.5.5 0 0 1 0 1H7.004c-.437 1.285-.84 2.461-1.046 3.039-.322.9-.75 1.447-1.29 1.739-.505.273-1.026.272-1.384.272H3.25a.55.55 0 0 1 0-1.1c.392 0 .654-.01.894-.14.22-.119.511-.395.778-1.142.185-.517.532-1.527.92-2.668H4.5a.5.5 0 0 1 0-1h1.682a1350 1350 0 0 0 1.18-3.496L7.533 3H5c-.849 0-1.5.651-1.5 1.5a.5.5 0 0 1-1 0" /></svg>;
const ForwardRef = forwardRef(SvgFontFamily);
export default ForwardRef;