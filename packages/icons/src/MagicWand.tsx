import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagicWand = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M13.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 0 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-2.046 2.646a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.707-.708l1-1a.5.5 0 0 1 .707 0m-2 2a.5.5 0 0 1 0 .708l-7 7a.5.5 0 1 1-.708-.708l7-7a.5.5 0 0 1 .708 0M13.5 5.1c.22 0 .4.18.4.4v.6h.6a.4.4 0 0 1 0 .8h-.6v.6a.4.4 0 0 1-.8 0v-.6h-.6a.4.4 0 0 1 0-.8h.6v-.6c0-.22.18-.4.4-.4M8.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMagicWand);
export default ForwardRef;