import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCardStackMinus = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M2.5 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM1 9.5a1.5 1.5 0 0 0 1 1.415v.585A1.5 1.5 0 0 0 3.5 13h8a1.5 1.5 0 0 0 1.5-1.5v-.585A1.5 1.5 0 0 0 14 9.5v-6A1.5 1.5 0 0 0 12.5 2h-10A1.5 1.5 0 0 0 1 3.5zm11 2V11H3v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5M5.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCardStackMinus);
export default ForwardRef;