import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFontBold = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" d="M5.105 12q-.595 0-.853-.264Q4 11.466 4 10.883V4.117q0-.595.258-.853Q4.522 3 5.105 3H9.03c1.108 0 2.025.982 2.025 2.185 0 .9-.45 1.634-1.35 2.051 1.162.213 1.814 1.392 1.814 2.245 0 1.031-.528 2.519-2.24 2.519zm3.274-3.997H5.8v2.628h2.579c.521 0 1.25-.51 1.25-1.332S8.9 8.003 8.38 8.003M5.8 4.37v2.327h2.38c.36 0 1.097-.337 1.097-1.196 0-.86-.797-1.131-1.097-1.131z" /></svg>;
const ForwardRef = forwardRef(SvgFontBold);
export default ForwardRef;