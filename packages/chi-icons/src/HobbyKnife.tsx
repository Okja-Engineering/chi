import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHobbyKnife = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M12.854 13.854a.5.5 0 0 1-.707 0l-5.75-5.75A.5.5 0 0 1 6.316 8H5a.5.5 0 0 1-.472-.336l-2.4-6.9A.5.5 0 0 1 2.936.23l5.4 4.9a.5.5 0 0 1 .164.37v.317a.5.5 0 0 1 .104.08l5.75 5.75a.5.5 0 0 1 0 .707zM8.25 6.957l-.793.793 5.043 5.043.793-.793zM3.717 2.288 5.355 7h.938L7.5 5.793V5.72z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgHobbyKnife);
export default ForwardRef;