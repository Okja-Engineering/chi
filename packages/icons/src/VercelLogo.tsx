import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVercelLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="m7.5 1-.577 1.003L1.175 12 .6 13h13.8l-.575-1-5.748-9.997zm0 2.006L2.329 12H12.67z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgVercelLogo);
export default ForwardRef;