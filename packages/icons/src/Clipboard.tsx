import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClipboard = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M5 2V1h5v1zm-.25-2A.75.75 0 0 0 4 .75V1h-.5A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 1H11V.75a.75.75 0 0 0-.75-.75zM11 2v.25a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 2.25V2h-.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgClipboard);
export default ForwardRef;