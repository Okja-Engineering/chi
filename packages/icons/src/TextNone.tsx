import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextNone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M13.354 2.354a.5.5 0 0 0-.708-.708l-.717.718a.45.45 0 0 0-.429-.314h-8a.45.45 0 0 0-.45.45v2a.45.45 0 1 0 .9 0V2.95h3v4.393l-5.304 5.303a.5.5 0 0 0 .708.708L6.95 8.757v3.293H5.754a.45.45 0 1 0 0 .9h3.5a.45.45 0 0 0 0-.9H8.05V7.657zM8.05 6.243l3-3V2.95h-3z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgTextNone);
export default ForwardRef;