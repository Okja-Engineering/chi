import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinTop = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 15 15" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#000" fillRule="evenodd" d="M1.5 1.05a.45.45 0 1 0 0 .9h12a.45.45 0 1 0 0-.9zm2.432 6.382a.45.45 0 1 0 .636.636L7.05 5.586V13.5a.45.45 0 0 0 .9 0V5.586l2.482 2.482a.45.45 0 1 0 .636-.636l-3.25-3.25a.45.45 0 0 0-.636 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgPinTop);
export default ForwardRef;